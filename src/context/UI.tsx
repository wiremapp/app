import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UIStates = createContext<any>({});

export function Provider({ children }: { children: React.ReactNode }) {
  const [newProject, setNewProject] = useState({ name: "" });
  const [rtl, setRTL] = useState(false);
  const { data: session, status } = useSession();
  const [userProjects, setUserProjects] = useState([]);
  const [projectModal, setProjectModal] = useState(true);

  const [intLoad, setIntLoad] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIntLoad(false)
    },500)
  },[intLoad]);

  return (
    <UIStates.Provider
      value={{
        setNewProject,
        newProject,
        rtl,
        setRTL,
        userProjects,
        setUserProjects,
        auth: { session, status },
        loading: {intLoad, setIntLoad}
      }}
    >
      {children}
    </UIStates.Provider>
  );
}

export default Provider;
