import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "../../../lib/decodeToken";
import Project from "../../../models/project.model";
import User from "../../../models/user.model";
import { connectToDatabase } from "../../../lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    const userId = decodeToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
    await connectToDatabase();

    const body = await req.json();
    const { name, description } = body;

    if (!name || !description) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Create Project in the database
    const project = await Project.create({
      name,
      description,
      userId,
    });

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { projects: project._id },
      },
      { new: true }
    );

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating Project:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = decodeToken(req);

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
    await connectToDatabase();

    // Fetch all Projects from the database
    const projects = await Project.find({ userId: userId });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching Projects:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
