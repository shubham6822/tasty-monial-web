import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Testimonial from "../../../models/testimonial.model";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { name, email, message, rating, userId } = body;
    console.log("userId", userId);

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

export async function GET() {
  try {
    await connectToDatabase();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
