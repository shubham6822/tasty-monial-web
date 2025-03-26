import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "../../../lib/decodeToken";
import Project from "../../../models/project.model";

export async function POST(req: NextRequest) {
  try {
    const userId = decodeToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
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

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating Project:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
