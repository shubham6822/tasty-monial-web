import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Testimonial from "../../../models/testimonial.model";
import CryptoJS from "crypto-js";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const {
      name,
      email,
      message,
      rating,
      projectId,
      title,
      company,
      profession,
    } = body;

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
      projectId,
      title,
      company,
      profession,
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
    const key = await req.headers.get("secret-key");

    if (!key) {
      return NextResponse.json(
        { error: "Secret key is missing" },
        { status: 400 }
      );
    }

    if (!process.env.SECRET_KEY) {
      return NextResponse.json(
        { error: "Secret key env  is missing" },
        { status: 500 }
      );
    }

    const bytes = CryptoJS.AES.decrypt(key, process.env.SECRET_KEY);
    const projectId = bytes.toString(CryptoJS.enc.Utf8);
    const testimonials = await Testimonial.find({ projectId: projectId });

    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
