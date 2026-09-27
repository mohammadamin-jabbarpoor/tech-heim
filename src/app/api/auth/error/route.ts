import { NextResponse } from "next/server";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const error = searchParams.get("error");

  return NextResponse.redirect(
    new URL(`/auth-error?error=${error ?? "unknown"}`, request.url),
  );
}
