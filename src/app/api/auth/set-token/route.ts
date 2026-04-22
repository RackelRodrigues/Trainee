import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token } = await req.json();

  const res = NextResponse.json({ ok: true });

  if (!token) {
    return NextResponse.json(
      { message: "Token não informado" },
      { status: 400 },
    );
  }

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: false,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
