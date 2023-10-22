import dbConnect from "@/utils/db";
import Project from "@/models/projects";
import Association from "@/models/associations";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { createProject, getProject, getUserProjects } from "@/utils/funcs";
import JWT from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body, query } = req;
  const { name } = body;
  const userSig = query.sig || body.sig;
  const projectId = query.id || body.id;
  const token = await getToken({ req });

  async function getAssociations(identifier) {
    try {
      dbConnect();
      const association = await Association.find({});

      return { success: { message: "associations_found" }, data: association };
    } catch (error) {
      return { error: { message: "get_associations_failed" } };
    }
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
    case "GET":
      
      if (!projectId){
        const decodedSignature = token || JWT.verify(userSig, process.env.NEXTAUTH_SECRET);

        const getProjectsStatus = await getUserProjects(dbConnect, Project, Association, decodedSignature);
        return res.status(200).json(getProjectsStatus);

      }
      const project = await getProject(dbConnect, Project,projectId);
      console.log(project);

      if (!project.success)
        return res.status(404).json({ error: { message: "project_notFound" } });

      res.status(200).json(project);

      break;
    case "POST":
      const decodedSignature = token || JWT.verify(userSig, process.env.NEXTAUTH_SECRET);
      const createdProjectStatus = await createProject(
        dbConnect,
        Project,
        Association,
        name,
        decodedSignature.sub,
      );
      res.status(200).json(createdProjectStatus);
      break;
    case "PUT":
      const updateProjectStatus = await editProject(projectId, { name });
      res.status(200).json(updateProjectStatus);
      break;
    default:
      res
        .status(405)
        .json({ error: { message: `Method ${method} not allowed.` } });
  }
}
