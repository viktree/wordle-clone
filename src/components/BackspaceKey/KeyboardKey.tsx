import { FunctionComponent } from "react";

const BackspaceKey: FunctionComponent<{}> = () => (
  <button
    className="px-2 h-full inline-flex items-center justify-center font-black p-30 outline outline-gray-500 dark:text-white"
    key="BACKSPACE"
  >
    {"BACK"}
  </button>
);

export default BackspaceKey;
