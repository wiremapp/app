import { fetchOrgs, fetchProjects, fetchSignature } from "@/utils/funcs";
import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UIStates = createContext<any>({});

export function Provider({ children }: { children: React.ReactNode }) {
  const [newProject, setNewProject] = useState({ name: "" });
  const [rtl, setRTL] = useState(false);
  const { data: session, status } = useSession();
  const [userProjects, setUserProjects] = useState([]);
  const [userProjectsLoading, setUserProjectsLoading] = useState(true);
  const [userOrgs, setUserOrgs] = useState([]);
  const [userOrgsLoading, setUserOrgsLoading] = useState(true);
  const [userSig, setUserSig] = useState("");
  const [isElectron, setIsElectron] = useState(false);
  const [intLoad, setIntLoad] = useState(false);
  const [isPWA, setIsPWA] = useState(false);
  const [consent, setConsent] = useState(true);
  const [authModal, setAuthModal] = useState(false);

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
    let mounted = true;

    (async () => {
      const projectsResponse = await fetchProjects(userSig);
      if (mounted) {
        console.log("Projs Fetched", projectsResponse);
        setUserProjects(projectsResponse.projects);
        setUserProjectsLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const OrgsResponse = await fetchOrgs();
      if (mounted) {
        console.log("Orgs Fetched", OrgsResponse);
        setUserOrgs(OrgsResponse.orgs);
        setUserOrgsLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    (async () => {
      if (mounted) {
        const sig = localStorage.getItem("signature");
        if (!sig) {
          const sigResponse = await fetchSignature();
          console.log("Sig Fetched", sigResponse);
          setUserSig(sigResponse.payload);
          localStorage.setItem("signature", sigResponse.payload);
        }else{
          setUserSig(sig);
          console.log("Sig Found", sig);
        }
      }
    })();

    return () => {
      mounted = false;
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
        userOrgs,
        userSig,
        authModal,
        setAuthModal,
        auth: { session, status },
        loading: { intLoad, setIntLoad },
        cookies: { consent, setConsent },
      }}
    >
      {children}
    </UIStates.Provider>
  );
}

export default Provider;
