import { NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpqwyyaz";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";

    const forwardOptions: any = { method: "POST", headers: {} };

    if (contentType.includes("application/json")) {
      const json = await req.json();
      forwardOptions.body = JSON.stringify(json);
      forwardOptions.headers["Content-Type"] = "application/json";
      forwardOptions.headers["Accept"] = "application/json";
    } else {
      const formData = await req.formData();
      forwardOptions.body = formData as unknown as BodyInit;
      forwardOptions.headers["Accept"] = "application/json";
      // Do not set Content-Type for FormData (runtime sets boundary)
    }

    const res = await fetch(FORMSPREE_ENDPOINT, forwardOptions);

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    // Try to surface Formspree's response body when available
    let body: any = null;
    try {
      body = await res.json();
    } catch {
      body = await res.text().catch(() => null);
    }

    return NextResponse.json({ ok: false, error: body }, { status: res.status });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
