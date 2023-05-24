import mongoose from "mongoose";

const ISchema = new mongoose.Schema({
  name: String,
  email: String,
});

export const defaultSchema =
  mongoose.models.Subscriber || mongoose.model("Subscriber", ISchema);

export default defaultSchema;
