import Orgnisation from "@/models/orgnisations";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name, projId } = body;

  const token = await getToken({ req });
  if (token) {
    switch (method) {
      case "GET":
        if (!token)
          return res.status(400).json({ message: `Token is required` });
        if (!projId) return res.status(200).json({ id: 1 });
        res
          .status(200)
          .json({ results: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
        break;
      case "POST":
        dbConnect();
        const userId = token?.sub;
        const project = new Orgnisation({
          name: name || "Untitled",
          initiationId: userId,
        });

        await project.save();
        res.status(200).json({ message: `Created project successfully` });

        break;

      default:
        res.status(405).json({ message: `Method ${method} not allowed.` });
    }
  } else {
    res.status(401).json({ message: `You must be logged in` });
  }
  res.end();
}