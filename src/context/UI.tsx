import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UIStates = createContext<any>({});

export function Provider({ children }: { children: React.ReactNode }) {
  const [newSpace, setNewSpace] = useState({ name: "" });
  const [rtl, setRTL] = useState(false);
  const [intLoad, setIntLoad] = useState(true);
  const { data: session, status } = useSession();
  const [userProjects, setUserProjects] = useState([]);
  
  useEffect(() => {
    setTimeout(() => setIntLoad(false), 3000);
  }, []);
  
  return (
    <UIStates.Provider
      value={{
        setNewSpace,
        newSpace,
        rtl,
        setRTL,
        intLoad,
        setIntLoad,
        auth : {session, status}
      }}
    >
      {children}
    </UIStates.Provider>
  );
}

export default Provider;
