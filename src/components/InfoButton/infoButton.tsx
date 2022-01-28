import { FunctionComponent } from 'react';

import { ReactComponent as InfoIcon } from './info.svg';

const Info: FunctionComponent<{ onClick: any }> = ({ children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full text-slate-900 dark:text-slate-100"
  >
    {children}
    <InfoIcon />
  </button>
);

export default Info;
