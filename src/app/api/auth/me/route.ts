import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongoose";
import jwt from "jsonwebtoken";
import User from "../../../../models/user.model";
import { decodeToken } from "../../../../lib/decodeToken";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const userId = await decodeToken(req);
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ data: user, success: true });
  } catch (error) {}
}
