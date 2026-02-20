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
    const { email, name } = await request.json();

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Send blueprint email
    await resend.emails.send({
      from: "Built for Performance <onboarding@resend.dev>",
      to: email,
      subject: "Your Combat Blueprint is ready",
      html: `
        <h2>Hey${name ? ` ${name}` : ""}!</h2>
        <p>Thanks for grabbing the Combat Blueprint. Here's your download link:</p>
        <p><a href="https://peteyurr.com/downloads/combat-blueprint.pdf" style="display: inline-block; background: #C2581F; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Download Blueprint (PDF)</a></p>
        <p>This guide breaks down:</p>
        <ul>
          <li>The Round-Ready strength framework</li>
          <li>Conditioning that matches fight demands</li>
          <li>Keep/cut decision rules for exercise selection</li>
        </ul>
        <p>If you have questions or want personalized programming, check out the <a href="https://peteyurr.com/coaching">coaching page</a>.</p>
        <p>Train smart,<br>Jake</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send blueprint error:", error);
    return NextResponse.json(
      { error: "Failed to send blueprint" },
      { status: 500 }
    );
  }
}
