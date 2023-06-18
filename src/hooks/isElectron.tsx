import { useState, useEffect } from "react";

export const useIsElectron = () => {
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsElectron(userAgent.indexOf(" electron/") > -1);
  }, []);

  return isElectron;
};

export default useIsElectron;
