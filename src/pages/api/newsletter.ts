
import { subscribeToNewsletter, unsubscribeFromNewsletter } from "@/utils/subscribers-helpers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { method, body } = req;
  const { name, email } = body;

  switch (method) {
    case "POST":
      const subscribeStatus = await subscribeToNewsletter(email, name);
      res.status(200).json(subscribeStatus);
      break;
    case "PATCH":
      const unsubscribeStatus = await unsubscribeFromNewsletter(email);
      res.status(200).json(unsubscribeStatus);
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
