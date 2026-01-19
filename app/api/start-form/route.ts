// app/api/start-form/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      return NextResponse.json(
        { ok: false, error: "FORMSPREE_ENDPOINT is not set" },
        { status: 500 }
      );
    }

    // Only handle form posts from your site
    const formData = await req.formData();

    // Forward to Formspree server-side (avoids Safari/private/CORS/adblock weirdness)
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      // Bubble up Formspree errors so you can debug
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: text || "Formspree submission failed" },
        { status: 400 }
      );
    }

    // SUCCESS: centralize redirect behavior.
    // If the client expects JSON (JS-fetch), return a JSON payload with the
    // redirect target so client-side code can navigate. For plain HTML
    // form submissions, return a 303 redirect so the browser follows it.
    const accept = req.headers.get("accept") || "";
    const redirectPath = "/thanks";

    if (accept.includes("application/json")) {
      return NextResponse.json({ ok: true, redirect: redirectPath });
    }

    // 303 forces a GET (prevents POST -> 405 on the target)
    return Response.redirect(new URL(redirectPath, req.url), 303);
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    );
  }
}
