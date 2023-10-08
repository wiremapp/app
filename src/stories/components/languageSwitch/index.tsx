import React, { useState } from "react";
import { supportedLanguages } from "@/i18n";
import { v4 as uuidv4 } from "uuid";

export const LanguageSwitchComponent = (props) => {
  const [dropdownVisible, setDropdownVisible] = useState(true);
  return (
    <div>
      <button
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {props.locale.manager.language}
      </button>

      <div
        id="dropdownHover"
        className={`z-10 ${
          dropdownVisible ? "" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownHoverButton"
        >
          {supportedLanguages.map((lng) => {
            return (
              <li key={uuidv4()}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.locale.manager.changeLanguage(lng);
                  }}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {lng}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
