// app/api/login-strapi/route.ts

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const loginRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/auth/local`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: username, password }),
      }
    );

    const data = await loginRes.json();

    if (!loginRes.ok) {
      return NextResponse.json(
        { message: data?.error?.message || "Login failed" },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ user: data.user });

    // Lưu JWT token vào cookie
    res.cookies.set("token", data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 ngày
    });

    return res;
  } catch (error: any) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
