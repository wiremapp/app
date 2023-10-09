import React from "react";

export const DropdownInputComponent = (props) => {
  return (
    <div
      className={`h-10 rounded-[4px] relative flex items-center text-gray-400 focus-within:text-cyan-400`}
    >
      <input
        type={props.type}
        readOnly={true}
        placeholder={props.placeholder}
        className={`w-full h-[41px] 
        
        ${props.theme == "dark" ? "bg-gray-700 border-gray-600" : ""} 
        
      ${
        props.icon ? "pr-14" : "pr-4"
      } pl-4 py-2.5 rounded-[4px] text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition`}
      />
      {props.icon && (
        <div className="absolute right-3 flex border-l pl-2">{props.icon}</div>
      )}
    </div>
  );
};

export default DropdownInputComponent;
