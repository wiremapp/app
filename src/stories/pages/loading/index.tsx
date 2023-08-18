import { LogoComponent } from "@/stories//units/logo";
import React from "react";

export const LoadingPage = (props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <LogoComponent text={false} />
        </div>
        <div className="flex justify-center">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
