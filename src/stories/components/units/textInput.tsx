import React from "react";

export const TextInputComponent = (props) => {
  return (
    <input
      className="h-[45px] w-full rounded-sm bg-white px-4 text-base tracking-wide text-black/70 opacity-70"
      {...props}
      placeholder="Email"
    />
  );
};

export default TextInputComponent;
