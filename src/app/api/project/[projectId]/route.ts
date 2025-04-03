import { NextRequest, NextResponse } from "next/server";
import { decodeToken } from "../../../../lib/decodeToken";
import Project from "../../../../models/project.model";
import { connectToDatabase } from "../../../../lib/mongoose";
import Testimonial from "../../../../models/testimonial.model";
import User from "../../../../models/user.model";

export async function GET(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;
    const userId = decodeToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
    await connectToDatabase();
    // Find Project in the database
    const project = await Project.findById(projectId);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error fetching Project:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;
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

    if (!projectId || !name || !description) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Update Project in the database
    const project = await Project.findOneAndUpdate(
      { _id: projectId },
      { name, description },
      { new: true }
    );

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error updating Project:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = await params;
    const userId = decodeToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
    await connectToDatabase();
    // Delete Project from the database
    await Testimonial.findByIdAndDelete({ projectId: projectId });

    await User.findByIdAndUpdate(userId, {
      $pull: { projects: projectId },
    });

    const project = await Project.findOneAndDelete({ _id: projectId });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    console.error("Error deleting Project:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
