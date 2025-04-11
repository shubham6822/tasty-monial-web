import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/mongoose";
import User from "../../../../models/user.model";
import { decodeToken } from "../../../../lib/decodeToken";

export async function PUT(req: NextRequest) {
  try {
    await connectToDatabase();
    const userId = await decodeToken(req);
    const data = await req.json();

    const { name, bio, location, picture } = data;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          ...(name && { name }),
          ...(bio && { bio }),
          ...(location && { location }),
          ...(picture && { picture }),
        },
      },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update user" },
      { status: 500 }
    );
  }
}
