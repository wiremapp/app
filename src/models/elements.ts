import mongoose from "mongoose";

export interface IType {
  name?: string;
  associationId?: string;
}

const ISchema = new mongoose.Schema({
  name: String,
  associationId: String,
  type: String,
  createdAt: Date,
});

export const defaultSchema =
  mongoose.models.Elements || mongoose.model<IType>("Elements", ISchema);

export default defaultSchema;
