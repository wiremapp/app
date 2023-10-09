import dbConnect from "@/utils/db";
import Project from "@/models/projects";
import Association from "@/models/associations";

import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { v4 as uuidv4 } from "uuid";

import JWT from "jsonwebtoken";
import { formatProjects } from "@/utils/funcs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  const { name, id: projectId } = body;
  const token = await getToken({ req });

  async function createProject(name, token) {
    const project = new Project({
      name: btoa(name),
      associationId: uuidv4(),
    });

    dbConnect();

    await project.save();
    return { success: { data: project, message: `project_created` } };
  }

  const payload = JWT.sign(
    { sub: "123", unregistered: true },
    process.env.NEXTAUTH_SECRET,
  );

  const decodedToken = JWT.verify(payload, process.env.NEXTAUTH_SECRET);

  async function getProjects(userId) {
    try {
      dbConnect();
      const projects = await Project.find({});
      const formattedProjects = await formatProjects(projects);

      return {
        success: { message: "projects_found" },
        projects: formattedProjects,
        userId,
      };
    } catch (error) {
      return { error: { message: "get_projects_failed" } };
    }
  }

  async function getAssociations(token) {
    try {
      dbConnect();
      const association = await Association.find({});

      return { success: { message: "associations_found" } };
    } catch (error) {
      return { error: { message: "get_associations_failed" } };
    }
  }

  async function createAssociation(data) {
    const association = new Association({
      name: atob(name),
      associationType: !data.token.sub ? "0" : "1",
      associationId: uuidv4(),
    });

    dbConnect();

    await association.save();
    return { success: { data: association, message: `association_created` } };
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
      const getProjectsStatus = await getProjects(token || decodedToken.sub);
      res.status(200).json(getProjectsStatus);
      break;
    case "POST":

      if(!projectId){
        const createdProjectStatus = await createProject(name, token);
        res.status(200).json(createdProjectStatus);
      }else{
        const getProjectsStatus = await getProjects(token || decodedToken.sub);
        res.status(200).json(getProjectsStatus.projects.filter(p => p.id === projectId ));
      }

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
