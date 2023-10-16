import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import JWT from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  const { sig } = body;

  async function createUnregisteredSignature() {
    try {
      const payload = JWT.sign(
        { sub: uuidv4(), unregistered: true },
        process.env.NEXTAUTH_SECRET,
      );

      return {
        success: { message: "signature_created" },
        payload,
      };
    } catch (error) {
      return { error: { message: "get_signature_failed" } };
    }
  }

  switch (method) {
    case "GET":
      const getSigStatus = await createUnregisteredSignature();
      res.status(200).json(getSigStatus);
      break;
    case "POST":
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
