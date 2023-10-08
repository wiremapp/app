import { fetchProjects } from "@/utils/funcs";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UIStates = createContext<any>({});

export function Provider({ children }: { children: React.ReactNode }) {
  const [newProject, setNewProject] = useState({ name: "" });
  const [rtl, setRTL] = useState(false);
  const { data: session, status } = useSession();
  const [userProjects, setUserProjects] = useState(["Demo"]);
  const [userProjectsLoading, setUserProjectsLoading] = useState(true);
  const [projectModal, setProjectModal] = useState(false);
  const [isElectron, setIsElectron] = useState(false);
  const [intLoad, setIntLoad] = useState(true);
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    window.matchMedia("(display-mode: standalone)").addListener((e) => {
      setIsPWA(e.matches);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPWA(true);
    }
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsElectron(userAgent.indexOf(" electron/") > -1);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setIntLoad(false);
    }, 500);
  }, [intLoad]);

  useEffect(() => {
    (async () => {
      const projectsResponse = await fetchProjects();
      console.log("Deeeeee",projectsResponse);
      setUserProjects(projectsResponse.projects);
    })().then(() => setUserProjectsLoading(false));
    return () => {};
  }, [userProjects]);

  return (
    <UIStates.Provider
      value={{
        isElectron,
        isPWA,
        setNewProject,
        newProject,
        rtl,
        setRTL,
        userProjects,
        setUserProjects,
        auth: { session, status },
        loading: { intLoad, setIntLoad },
      }}
    >
      {children}
    </UIStates.Provider>
  );
}

export default Provider;
