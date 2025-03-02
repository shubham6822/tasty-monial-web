"use server";

import User, { IUser } from "../../models/user.model";
import { connectToDatabase } from "../mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Ensure to set this in your .env file
const JWT_EXPIRATION = "7d"; // Token expires in 7 days

// Generate JWT Token
const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export async function createUser(userData: Partial<IUser>) {
  try {
    await connectToDatabase();
    console.log("userData", userData);

    // Hash password before storing
    if (userData.password) {
      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(userData.password, salt);
    }

    const newUser = await User.create(userData);
    return {
      success: true,
      message: "User created successfully!",
    };
  } catch (error: any) {
    console.error("Error creating user:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(", ");
      return {
        success: false,
        error: `Validation failed: ${validationErrors}`,
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred while creating the user.",
    };
  }
}

export async function getUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return { success: false, error: "User not found." };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password || "");
    if (!isPasswordValid) {
      return { success: false, error: "Incorrect password." };
    }

    // Generate JWT token
    const token = generateToken(user);

    return {
      success: true,
      message: "User authenticated successfully!",
      data: token,
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      success: false,
      error: "An unexpected error occurred while fetching the user.",
    };
  }
}
