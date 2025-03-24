import mongoose, { Document, Schema, model, models } from "mongoose";

interface ITestimonial extends Document {
  name: string;
  message: string;
  email: string;
  rating: number;
  date: Date;
  userId: string;
  title: string;
  company: string;
  socialLinks: string[];
  image: string;
  video: string;
  profession: string;
}

const TestimonialSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
  email: { type: String, required: true },
  title: { type: String },
  company: { type: String },
  socialLinks: { type: [String], default: [] },
  image: { type: String },
  video: { type: String },
  profession: { type: String },
});

const Testimonial =
  models?.testimonial || model<ITestimonial>("testimonial", TestimonialSchema);
export default Testimonial;
