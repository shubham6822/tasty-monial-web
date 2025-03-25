import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IUser {
  name?: string;
  username?: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  projects: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    bio: { type: String },
    picture: { type: String },
    location: { type: String },
    projects: [
      { type: Schema.Types.ObjectId, ref: "Project" },
      { default: [] },
    ],
  },
  { timestamps: true }
);

const User = models?.user || model<IUser>("user", UserSchema);

export default User;
