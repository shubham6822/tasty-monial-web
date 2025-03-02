"use server";
import User from "../../models/user.model";
import { connectToDatabase } from "../mongoose";

export async function createUser(userData: any) {
  try {
    await connectToDatabase();

    const newUser = await User.create(userData);

    return newUser.toObject();
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
}
