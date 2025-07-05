// pages/api/me.ts
import { parse } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cookies = parse(req.headers.cookie || "");
  const token = cookies.token;

  if (!token) return res.status(401).json({ message: "No token found" });

  const meRes = await fetch(`${process.env.STRAPI_URL}/api/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await meRes.json();

  if (!meRes.ok) {
    return res.status(401).json({ message: "Invalid token" });
  }

  return res.status(200).json({ user: data });
}
