import dbConnect from "@/utils/db";
import Element from "@/models/elements";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  const { name, sig, id: projectId } = body;
  const token = await getToken({ req });

  async function createElement(name = "Untitled", assocId) {
    try {

      if (!assocId) {
        return { error : { message : "assocId_missing"}};
      }
  
      const element = new Element({
        name: btoa(name),
        associationId: assocId,
      });
  
      dbConnect();
  
      await element.save();
      
      return {
        success: { message: 'element_created' },
        data: {...element._doc, name: atob(element.name)},
      };
    } catch (error) {
      return {
        error
      };
    }
  }

  switch (method) {
    case "GET":
      break;
    case "POST":
      const createElementStatus = await createElement(name, projectId);
      res.status(200).json(createElementStatus);
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
