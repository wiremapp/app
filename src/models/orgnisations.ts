import mongoose from "mongoose";

export interface IMember {
  userId: string;
  role?: string;
}

export interface IType {
  name: string;
  members?: IMember[];
}

const ISchema = new mongoose.Schema({
  name: String,
  members: Array,
});

export const defaultSchema =
  mongoose.models.Organisations || mongoose.model<IType>("Organisations", ISchema);

export default defaultSchema;
