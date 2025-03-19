import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongoose";
import jwt from "jsonwebtoken";
import User from "../../../../models/user.model";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const secret = process.env.JWT_SECRET || "your_secret_key";
    if (!secret) {
      return NextResponse.json({
        error: "JWT_SECRET is not defined",
      });
    }

    const decodeToken = jwt.verify(token, secret);

    if (!decodeToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(decodeToken.id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ data: user, success: true });
  } catch (error) {}
}
