import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  className?: string;
};

export const Component = (props: Props) => {
  return (
    <div className="h-full bg-yellow-200">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-6 lg:px-32">
        <div className="flex w-full items-center justify-center bg-gray-500">
          Check back soon...
        </div>
      </div>
    </div>
  );
};

export default Component;
