import mongoose from "mongoose";

export interface IType {
  name?: string;
  email: string;
}

const ISchema = new mongoose.Schema({
  name: String,
  email: String,
});

export const defaultSchema =
  mongoose.models.Subscribers || mongoose.model<IType>("Subscribers", ISchema);

export default defaultSchema;
