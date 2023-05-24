import { Subscriber } from "@/models";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name, email } = body;

  switch (method) {
    case "POST":
      if (!email) return res.status(400).json({ message: `Email is required` });

      const subscriber = new Subscriber.defaultSchema({
        email,
        name,
      });
  
      await subscriber.save();
      res.status(200).json({ message: `Subscribed successfully` });

      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed.` });
  }
}
