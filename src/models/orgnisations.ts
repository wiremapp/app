import mongoose from "mongoose";

export interface IType {
  name: string;
  associationId?: string;
  prettyUrl: String,
}

const ISchema = new mongoose.Schema({
  name: String,
  associationId: String,
  prettyUrl: String
});

export const defaultSchema =
  mongoose.models.Organisations ||
  mongoose.model<IType>("Organisations", ISchema);

export default defaultSchema;
