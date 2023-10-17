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
  const { method, body, query } = req;
  const { name, sig, task } = body;
  const projectId = query.id || body.id;
  const token = await getToken({ req });

  async function createProject(name, userIdentifier) {
    const assocUUID = uuidv4();
    const project = new Project({
      name: btoa(name),
      associationId: assocUUID,
    });

    const assoc = await createAssociation(userIdentifier, assocUUID);

    dbConnect();

    await project.save();
    return {
      success: { message: `project_created` },
      data: project,
      association: assoc.data,
    };
  }

  const payload = JWT.sign(
    { sub: "123", unregistered: true },
    process.env.NEXTAUTH_SECRET,
  );

  async function getProjects(sig) {
    try {
      dbConnect();
      const projects = await Project.find({});
      const formattedProjects = await formatProjects(projects);

      return {
        success: { message: "projects_found" },
        projects: formattedProjects,
        sig,
      };
    } catch (error) {
      return { error: { message: "get_projects_failed" } };
    }
  }

  async function getAssociations(identifier) {
    try {
      dbConnect();
      const association = await Association.find({});

      return { success: { message: "associations_found" }, data: association };
    } catch (error) {
      return { error: { message: "get_associations_failed" } };
    }
  }

  async function createAssociation(identifier, uuid) {
    const association = new Association({
      role: 1,
      type: 0,
      uuid,
      userId: identifier,
    });

    dbConnect();

    await association.save();
    return { success: { message: `association_created` }, data: association };
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
      const getProjectsStatus = await getProjects(sig);

      if (projectId) {
        const project = getProjectsStatus.projects.filter(
          (p) => p.id === projectId,
        )[0];

        let projectStatus;

        if (project) {
          projectStatus = {
            success: { message: "project_found" },
            project,
          };
          res.status(200).json(projectStatus);
        } else {
          projectStatus = {
            error: { message: "project_not_found" },
          };
          res.status(404).json(projectStatus);
        }
      } else {
        res.status(200).json(getProjectsStatus);
      }
      break;
    case "POST":
      const decodedToken = JWT.verify(sig, process.env.NEXTAUTH_SECRET);
      // Get All Projects
      if (!projectId) {
        const createdProjectStatus = await createProject(
          name,
          decodedToken.sub,
        );
        res.status(200).json(createdProjectStatus);
      } else {
        const getProjectsStatus = await getProjects(sig);
        res
          .status(200)
          .json(getProjectsStatus.projects.filter((p) => p.id === projectId));
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
