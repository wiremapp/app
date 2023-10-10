import React, { useState } from "react";
import { supportedLanguages } from "@/i18n";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.css";
import DropdownInputComponent from "../units/dropdownInput";

export const LanguageSwitchComponent = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const changeLanguageHandler = (lng) => {
    props.locale.manager.changeLanguage(lng);
  };

  return (
    // <div>
    //   <button
    //     onClick={() => setDropdownVisible(!dropdownVisible)}
    //     className={styles.switch}
    //     type="button"
    //   >
    //     {props.locale.manager.language}
    //   </button>

    //   <div
    //     className={`absolute z-10 ${
    //       dropdownVisible ? "" : "hidden"
    //     } bg-white divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-700`}
    //   >
    //     <ul
    //       className=" py-2 text-sm text-gray-700 dark:text-gray-200"
    //     >
    //       {supportedLanguages.map((lng) => {
    //         return (
    //           <li key={uuidv4()}>
    //             <a
    //               href="#"
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 props.locale.manager.changeLanguage(lng);
    //               }}
    //               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    //             >
    //               {lng}
    //             </a>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
    <div className="dropdown inline-block relative">
      <DropdownInputComponent
        icon={null}
        placeholder={props.locale.manager.language}
        theme={props.theme}
      />
      <div
        className={`dropdown-menu leftDrop shadow-md z-20 rounded-[4px] text-gray-700 pt-2`}
      >
        <div
          className={`flex flex-col border h-48 w-96 p-2   ${
            props.theme == "dark"
              ? "bg-gray-700 border-gray-600 text-gray-200"
              : "bg-white"
          }`}
        >
          {supportedLanguages.map((lng) => {
            return (
              <div
                className={""}
                onClick={() => changeLanguageHandler(lng)}
                key={uuidv4()}
              >
                {lng}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
