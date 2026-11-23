import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const LIMITS = { name: 100, email: 200, phone: 30, message: 3000 } as const;
const INTERESTS = [
  "In-person at Dragon Gym",
  "1:1 online coaching",
  "Group training",
  "Something else",
];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export type ContactFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field. Pretend it worked.
  if (str(body.company)) {
    return NextResponse.json({ success: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const message = str(body.message);
  const interest = INTERESTS.includes(str(body.interest))
    ? str(body.interest)
    : "Something else";

  const errors: ContactFieldErrors = {};
  if (!name) errors.name = "Enter your name.";
  else if (name.length > LIMITS.name)
    errors.name = `Keep your name under ${LIMITS.name} characters.`;

  if (!email) errors.email = "Enter your email so I can reply.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = "Enter a valid email, like name@example.com.";

  if (phone.length > LIMITS.phone)
    errors.phone = `Keep the phone number under ${LIMITS.phone} characters.`;

  if (!message) errors.message = "Write a short message.";
  else if (message.length > LIMITS.message)
    errors.message = `Keep your message under ${LIMITS.message} characters.`;

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Invalid fields", errors }, { status: 400 });
  }

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "Built for Performance Website <onboarding@resend.dev>",
      to: "jake24peterson@gmail.com",
      replyTo: email,
      subject: `New message: ${interest} — ${name}`,
      html: `
        <h2>New message from the website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not given"}</p>
        <p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Contact form Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
