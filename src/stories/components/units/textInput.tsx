import React from "react";

export const TextInputComponent = (props) => {
  return (
    <input
      {...props}
      className="h-[45px] w-full rounded-sm bg-white px-4 text-base tracking-wide text-black/70 opacity-70"
    />
  );
};

export default TextInputComponent;
