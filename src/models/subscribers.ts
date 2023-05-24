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
  mongoose.models.Subscriber || mongoose.model<IType>("Subscriber", ISchema);

export default defaultSchema;
