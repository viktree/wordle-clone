import { FunctionComponent } from 'react';

import { ReactComponent as SettingsIcon } from './settings.svg';

const Settings: FunctionComponent<{ onClick: any }> = ({
  children,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className="rounded-full text-slate-900 dark:text-slate-100"
  >
    {children}
    <SettingsIcon />
  </button>
);

export default Settings;
