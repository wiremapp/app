import React, { useRef, useEffect } from "react";

interface ScrollAreaProps {
  width: number | "auto";
  height: number | "auto";
  children: any;
}

const ScrollArea = ({ width, height, children }: ScrollAreaProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) return;

      event.preventDefault();

      const zoomDelta = 1 + event.deltaY / 100;
      container.style.transform = `scale(${zoomDelta})`;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="flex-shrink-0">Header content</div>
      <div className="overflow-hidden">
        <div className="flex h-[100vh] w-full items-center justify-center overflow-y-auto bg-red-200">
          {children}
        </div>
      </div>
      <div className="flex-shrink-0">Footer Content</div>
    </div>
  );
};

export default ScrollArea;
