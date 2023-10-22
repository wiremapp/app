import mongoose from "mongoose";

export interface IType {
  userId?: string;
  type?: string;
  createdAt?: Date;
  duration?: number;
}

const ISchema = new mongoose.Schema({
  userId: String,
  type: String,
  createdAt: Date, 
  duration: Date,
});

export const defaultSchema =
  mongoose.models.Memberships || mongoose.model<IType>("Memberships", ISchema);

export default defaultSchema;
