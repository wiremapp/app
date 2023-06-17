
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      res
        .status(200)
        .json({ results: [{message: "success"}] });
    default:
      res.status(405).json({ message: `Method ${method} not allowed.` });
  }

  res.end();
}