import { fetchProjects } from "@/utils/funcs";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UIStates = createContext<any>({});

export function Provider({ children }: { children: React.ReactNode }) {
  const [newProject, setNewProject] = useState({ name: "" });
  const [rtl, setRTL] = useState(false);
  const { data: session, status } = useSession();
  const [userProjects, setUserProjects] = useState([]);
  const [userProjectsLoading, setUserProjectsLoading] = useState(true);
  const [projectModal, setProjectModal] = useState(false);
  const [isElectron, setIsElectron] = useState(false);
  const [intLoad, setIntLoad] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [consent, setConsent] = useState(true);

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
  }, []);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      const projectsResponse = await fetchProjects();
      if (isMounted) {
        console.log("Deeeeee", projectsResponse);
        setUserProjects(projectsResponse.projects);
        setUserProjectsLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);


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
        cookies : { consent, setConsent }
      }}
    >
      {children}
    </UIStates.Provider>
  );
}

export default Provider;
