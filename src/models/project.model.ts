import mongoose, { Schema, Document, models } from "mongoose";

export interface IProject extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  projectKey?: string;
}

const ProjectSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    projectKey: { type: String },
  },
  { timestamps: true }
);

const Project =
  models?.project || mongoose.model<IProject>("project", ProjectSchema);
export default Project;
