import { useContext } from 'react';

import { Toggle as ToggleComponent } from '../../components';
import { context } from '../../containers';

const Toggle = () => {
  const { isDarkMode, toggleIsDarkMode } = useContext(context);

  return (
    <ToggleComponent
      isDarkMode={isDarkMode}
      toggleIsDarkMode={toggleIsDarkMode}
    />
  );
};

export default Toggle;
