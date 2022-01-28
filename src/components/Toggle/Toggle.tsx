import { FunctionComponent } from "react";

import "./Toggle.css";

const Toggle: FunctionComponent<{
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
}> = ({ isDarkMode, toggleIsDarkMode }) => {
  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 appearance-none cursor-pointer"
        onClick={toggleIsDarkMode}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
      <label className="hidden" htmlFor="toggle">
        {isDarkMode ? "Switch to light mode" : "Come to the dark side"}
      </label>
    </div>
  );
};

export default Toggle;
