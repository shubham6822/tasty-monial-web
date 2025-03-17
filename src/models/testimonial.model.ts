import mongoose, { Document, Schema, Model } from "mongoose";

interface ITestimonial extends Document {
  name: string;
  message: string;
  email: string;
  rating: number;
  createdAt: Date;
}

const TestimonialSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true },
});

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ||
  mongoose.model<ITestimonial>("testimonial", TestimonialSchema);
export default Testimonial;
