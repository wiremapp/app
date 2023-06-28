import Subscriber from "@/models/subscribers";
import dbConnect from "@/utils/db";
import { validateEmail } from "@/utils/funcs";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name, email } = body;

  switch (method) {
    case "POST":
      if (!email) return res.status(400).json({ message: `Email is required` });
      const validEmail: boolean = validateEmail(email);
      if(!validEmail) return res.status(400).json({ message: `Invalid Email` });
      dbConnect();
      const subscriber = new Subscriber({
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
