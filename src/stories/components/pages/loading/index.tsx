import { LogoComponent } from "@/stories/components/units/logo";
import React from "react";

export const LoadingPage = (props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <LogoComponent text={false} loading={true} />
        </div>
        <div className="flex justify-center text-[6px] uppercase mt-2 opacity-80">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
