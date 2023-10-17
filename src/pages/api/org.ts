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
    return {
      success: { message: `org_created` },
      data: { ...org._doc, name: atob(org.name) },
    };
  }

  async function getUserOrgs() {
    try {
      dbConnect();
      const orgs = await Orgnisation.find({});
      const formattedOrgs = await formatOrgs(orgs);

      return {
        success: { message: "orgs_found" },
        orgs: formattedOrgs,
      };
    } catch (error) {
      return { error };
    }
  }

  async function getAllOrgs() {
    try {
      dbConnect();
      const orgs = await Orgnisation.find({});
      const formattedOrgs = await formatOrgs(orgs);

      return {
        success: { message: "orgs_found" },
        orgs: formattedOrgs,
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
      if (!name && !token) {
        const getOrgsStatus = await getAllOrgs();
        res.status(200).json(getOrgsStatus);
      } else {
        const getUserOrgsStatus = await getUserOrgs();

        const org = getUserOrgsStatus.orgs.filter(
          (o) => o.encodedName === btoa(name),
        )[0];

        let orgStatus;

        if (org) {
          orgStatus = {
            success: { message: "org_found" },
            org,
          };
          res.status(200).json(orgStatus);
        } else {
          orgStatus = {
            error: { message: "org_not_found" },
          };
          res.status(404).json(orgStatus);
        }
      }
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
