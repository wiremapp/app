import mongoose from "mongoose";

export interface IPage {
  name?: string;
  content?: string;
}

export interface IElement {
  name?: string;
  content?: string;
}

export interface IType {
  name?: string;
  type: "individual" | "organisation";
  pages: IPage[];
  elements: IElement[];
}

const ISchema = new mongoose.Schema({
  name: String,
  pages: Array,
  elements: Array,
});

export const defaultSchema =
  mongoose.models.Projects || mongoose.model<IType>("Projects", ISchema);

export default defaultSchema;
