"use client";

import { useState, type FormEvent } from "react";

const labelClass =
  "font-display block text-[12px] font-semibold uppercase tracking-[0.2em] text-ink";
const inputClass =
  "mt-2 block min-h-[52px] w-full rounded-none border-2 border-ink bg-white px-4 font-sans text-[16px] text-ink aria-[invalid=true]:border-[3px]";
const errorClass = "mt-2 text-[15px] font-semibold text-ink";

type Field = "name" | "email" | "phone" | "message";
type FieldErrors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Mirrors the checks in app/api/contact/route.ts so people see problems before sending.
function validate(data: Record<Field, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name) errors.name = "Enter your name.";
  else if (data.name.length > 100) errors.name = "Keep your name under 100 characters.";
  if (!data.email) errors.email = "Enter your email so I can reply.";
  else if (data.email.length > 200 || !EMAIL_RE.test(data.email))
    errors.email = "Enter a valid email, like name@example.com.";
  if (data.phone.length > 30) errors.phone = "Keep the phone number under 30 characters.";
  if (!data.message) errors.message = "Write a short message.";
  else if (data.message.length > 3000)
    errors.message = "Keep your message under 3000 characters.";
  return errors;
}

export default function ContactSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const data = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      message: get("message"),
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          interest: get("interest"),
          company: get("company"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 400) {
        const json = await res.json().catch(() => null);
        if (json?.errors) {
          setErrors(json.errors);
          setStatus("idle");
          return;
        }
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const fieldProps = (field: Field) => ({
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className={errorClass}>
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="contact" className="bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          {showHeading && (
            <>
              <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-stone">
                Contact
              </p>
              <h2 className="font-display mt-4 mb-4 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
                Let&apos;s talk training.
              </h2>
            </>
          )}
          <p className="max-w-[480px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
            Call, text, email, or send a message. I usually reply within a day.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            <div className="border-t-2 border-ink pt-4">
              <p className={labelClass}>Call or text</p>
              <a
                href="tel:+17174484222"
                className="font-display mt-2 inline-flex min-h-11 items-center text-[24px] font-bold md:text-[26px]"
              >
                717-448-4222
              </a>
            </div>
            <div className="border-t-2 border-ink pt-4">
              <p className={labelClass}>Email</p>
              <a
                href="mailto:jake24peterson@gmail.com"
                className="font-display mt-2 inline-flex min-h-11 max-w-full items-center break-all text-[18px] font-bold md:text-[22px]"
              >
                jake24peterson@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="min-w-0 border-2 border-ink bg-cream p-6 md:p-8">
          <h3 className="font-display text-[22px] font-extrabold uppercase leading-tight md:text-[26px]">
            Send a message
          </h3>

          {status === "sent" ? (
            <p role="status" className="mt-6 text-[19px] font-semibold leading-relaxed text-ink">
              Got it. I&apos;ll reply within a day.
            </p>
          ) : (
            <form
              method="post"
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 flex flex-col gap-5"
            >
              {/* Honeypot: hidden from people and screen readers; bots tend to fill it. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className={inputClass}
                  {...fieldProps("name")}
                />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  required
                  maxLength={200}
                  className={inputClass}
                  {...fieldProps("email")}
                />
                {fieldError("email")}
              </div>
              <div>
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone (optional)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={30}
                  className={inputClass}
                  {...fieldProps("phone")}
                />
                {fieldError("phone")}
              </div>
              <div>
                <label htmlFor="contact-interest" className={labelClass}>
                  Interested in
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  defaultValue="In-person at Dragon Gym"
                  className={inputClass}
                >
                  <option>In-person at Dragon Gym</option>
                  <option>1:1 online coaching</option>
                  <option>Group training</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={3000}
                  className={`${inputClass} py-3`}
                  {...fieldProps("message")}
                />
                {fieldError("message")}
              </div>

              {status === "error" && (
                <p role="alert" className="text-[17px] font-semibold text-ink">
                  Something went wrong. Text{" "}
                  <a href="tel:+17174484222" className="underline decoration-2 underline-offset-4">
                    717-448-4222
                  </a>{" "}
                  instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="font-display min-h-[54px] w-full bg-ink px-7 text-[13px] font-bold uppercase tracking-[0.12em] text-cream disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
