import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

export async function POST(request: NextRequest) {
  try {
    const resend = getResend();
    const { name, email, experience, goals, instagram } = await request.json();

    // Validate required fields
    if (!name || !email || !experience || !goals) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "Built for Performance Coaching <onboarding@resend.dev>",
      to: email,
      subject: "Coaching Application Received",
      html: `
        <h2>Thanks for applying, ${name}!</h2>
        <p>I've received your coaching application and will review it within 48 hours.</p>
        <p>In the meantime, feel free to check out the <a href="https://peteyurr.com/products">programs page</a> for self-guided options.</p>
        <p>Talk soon,<br>Jake</p>
      `,
    });

    // Send notification to Jake
    await resend.emails.send({
      from: "Built for Performance Website <onboarding@resend.dev>",
      to: "jake24peterson@gmail.com",
      subject: `New Coaching Application: ${name}`,
      html: `
        <h2>New Coaching Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Goals:</strong></p>
        <p>${goals.replace(/\n/g, "<br>")}</p>
        ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ""}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Coaching application error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
