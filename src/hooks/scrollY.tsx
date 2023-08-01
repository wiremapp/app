import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY, progress };
}

export default useScrollProgress;
