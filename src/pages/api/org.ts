import Orgnisation from "@/models/orgnisations";
import dbConnect from "@/utils/db";
import { formatOrgs } from "@/utils/funcs";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  const { name } = body;
  const token = await getToken({ req });

  async function createOrg(name) {
    const org = new Orgnisation({
      name: btoa(name),
      associationId: uuidv4(),
    });

    dbConnect();

    await org.save();
    return { success: { data: org, message: `org_created` } };
  }

  async function getOrgs(userId) {
    try {
      dbConnect();
      const orgs = await Orgnisation.find({});
      const formattedOrgs = await formatOrgs(orgs);

      return {
        success: { message: "orgs_found" },
        orgs: formattedOrgs,
        userId,
      };
    } catch (error) {
      return { error: { message: "get_orgs_failed" } };
    }
  }

  switch (method) {
    case "POST":
      const createdProjectStatus = await createOrg(name);
      res.status(200).json(createdProjectStatus);
      break;
    case "GET":
      const getOrgStatus = await getOrgs(name);
      res.status(200).json(getOrgStatus);
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
