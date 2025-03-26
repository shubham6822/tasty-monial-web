import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  [key: string]: any;
}

export function decodeToken(req: NextRequest) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return null;
  }

  const secret = process.env.JWT_SECRET || "your_secret_key";
  if (!secret) {
    return null;
  }

  const decodedToken = jwt.verify(token, secret) as DecodedToken;

  if (!decodedToken || !decodedToken.id) {
    return null;
  }
  return decodedToken.id as string;
}
