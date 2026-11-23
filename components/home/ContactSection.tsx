"use client";

import type { FormEvent } from "react";

const labelClass =
  "font-display block text-[12px] font-semibold uppercase tracking-[0.2em] text-ink";
const inputClass =
  "mt-2 block min-h-[52px] w-full rounded-none border-2 border-ink bg-white px-4 font-sans text-[16px] text-ink";

export default function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(3c): send via Resend
  }

  return (
    <section id="contact" className="bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-stone">
            Contact
          </p>
          <h2 className="font-display mt-4 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
            Let&apos;s talk training.
          </h2>
          <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
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
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
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
                className={inputClass}
              />
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
                className={inputClass}
              />
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
                className={inputClass}
              />
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
                className={`${inputClass} py-3`}
              />
            </div>
            <button
              type="submit"
              className="font-display min-h-[54px] w-full bg-ink px-7 text-[13px] font-bold uppercase tracking-[0.12em] text-cream"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
