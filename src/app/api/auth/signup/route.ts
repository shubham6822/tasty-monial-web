import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectToDatabase } from "../../../../lib/mongoose";
import User from "../../../../models/user.model";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
const JWT_EXPIRATION = "7d";

// Generate JWT Token
const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { email, password, ...otherData } = await req.json();
    console.log("email", email);
    console.log("password", password);

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 401 }
      );
    }

    const isExitingUser = await User.findOne({ email }).select("email").lean();
    if (isExitingUser) {
      return NextResponse.json(
        { success: false, error: "User already exists." },
        { status: 401 }
      );
    }
    // Hash password before storing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({ email, password: hashedPassword, ...otherData });

    return NextResponse.json(
      { success: true, message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
