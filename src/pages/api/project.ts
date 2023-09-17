import dbConnect from "@/utils/db";
import Project from "@/models/projects";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  const { name, id } = body;
  const token = await getToken({ req });

  async function createProject(name, token) {
    const project = new Project({
      name: atob(name),
      initiationId: !token ? "0" : "1",
    });

    dbConnect();

    await project.save();
    return { success: { message: `project_created` } };
  }

  async function editProject(id, data) {
    try {
      dbConnect();

      const project = await Project.findById(id);
      if (!project) {
        return { error: { message: "project_not_found" } };
      }

      project.name = atob(data.name);

      await project.save();

      return { success: { message: "project_updated" } };
    } catch (error) {
      return { error: { message: "project_update_failed" } };
    }
  }

  switch (method) {
    case "POST":
      const createdProjectStatus = await createProject(name, token);
      res.status(200).json(createdProjectStatus);
      break;
    case "PUT":
        const updateProjectStatus = await editProject(id, { name });
        res.status(200).json(updateProjectStatus);
        break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
