import { Orgnisation } from "@/models";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name } = body;

  switch (method) {
    case "POST":
      if (!name)
        return res
          .status(400)
          .json({ message: `Orgnisation name is required` });
      dbConnect();
      const orgnisation = new Orgnisation.defaultSchema({
        name,
      });
      await orgnisation.save();
      res.status(200).json({ message: `Orgnisation created successfully` });
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed.` });
  }
}