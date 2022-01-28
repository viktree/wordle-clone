import { FunctionComponent } from "react";

const Background: FunctionComponent<{}> = ({ children }) => (
  <div className="flex flex-col h-screen bg-slate-100 dark:bg-slate-900">
    {children}
  </div>
);

export default Background;
