import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Testimonial from "../../../models/testimonial.model";
import { decodeToken } from "../../../lib/decodeToken";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { name, email, message, rating, userId } = body;

    if (
      !name ||
      !email ||
      !/.+\@.+\..+/.test(email) ||
      !message ||
      typeof rating !== "number" ||
      rating < 1 ||
      rating > 5
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const newTestimonial = await Testimonial.create({
      name,
      email,
      message,
      rating,
      userId,
    });
    return NextResponse.json(newTestimonial, { status: 201 });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    const userId = decodeToken(req);
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access" },
        { status: 403 }
      );
    }
    const testimonials = await Testimonial.find({ userId: userId });

    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
