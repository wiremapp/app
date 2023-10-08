import mongoose from "mongoose";

export interface IType {
  name?: string;
  associationId?: string;
  prettyUrl?: string;
}

const ISchema = new mongoose.Schema({
  name: String,
  associationId: String,
  createdAt: Date,
  prettyUrl: String,
});

export const defaultSchema =
  mongoose.models.Projects || mongoose.model<IType>("Projects", ISchema);

export default defaultSchema;
