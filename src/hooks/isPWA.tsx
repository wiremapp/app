import { useState, useEffect } from "react";

function useIsPWA() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    window.matchMedia("(display-mode: standalone)").addListener((e) => {
      setIsPWA(e.matches);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPWA(true);
    }
  }, []);

  return isPWA;
}

export default useIsPWA;
