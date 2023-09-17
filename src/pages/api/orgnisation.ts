import Orgnisation from "@/models/orgnisations";
import dbConnect from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name } = body;
  const token = await getToken({ req });

  async function createOrgnisation(name) {
    const orgnisation = new Orgnisation({
      name: atob(name || "Untitled"),
      initiationId: "123",
    });

    dbConnect();

    await orgnisation.save();
    return { success: { message: `orgnisation_created`, id: orgnisation._id } };
  }

  switch (method) {
    case "POST":
      const createdProjectStatus = await createOrgnisation(name);
      res.status(200).json(createdProjectStatus);
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
