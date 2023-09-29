import mongoose from "mongoose";

export interface IType {
  userId?: string;
  associationId: string;
  role: number;
  type: number;
}

const ISchema = new mongoose.Schema({
  uuid: String,
  userId: String,
  role: Number,
  type: Number,
});

export const defaultSchema =
  mongoose.models.Associations ||
  mongoose.model<IType>("Associations", ISchema);

export default defaultSchema;
