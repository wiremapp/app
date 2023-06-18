import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const { apiKey } = query;

  if (apiKey) {
    switch (method) {
      case "GET":
        if (!apiKey)
          return res.status(400).json({ message: `apiKey is required` });
        res
          .status(200)
          .json({ results: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
        break;
     default:
        res.status(405).json({ message: `Method ${method} not allowed.` });
    }
  } else {
    res.status(401).json({ message: `API key is required.` });
  }
  res.end();
}