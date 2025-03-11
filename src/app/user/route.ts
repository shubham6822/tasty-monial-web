import { NextRequest, NextResponse } from "next/server";
import User, { IUser } from "../../../models/user.model";
import { connectToDatabase } from "../mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
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

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const password = searchParams.get("password");

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required." },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password || "");
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: "Incorrect password." },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user);

    return NextResponse.json(
      {
        success: true,
        message: "User authenticated successfully!",
        data: token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
