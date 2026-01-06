import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.redirect(new URL("/thanks", req.url), 308);
}

export async function POST(req: Request) {
  return NextResponse.redirect(new URL("/thanks", req.url), 308);
}
