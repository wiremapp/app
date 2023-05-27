import { Project } from "@/models";
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
      dbConnect();
      const project = new Project.defaultSchema({
        name : name || "Untitled",
      });
  
      await project.save();
      res.status(200).json({ message: `Created project successfully` });

      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed.` });
  }
}
