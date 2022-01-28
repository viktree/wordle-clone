import { FunctionComponent, useEffect, useState } from 'react';
import { useInterpret } from '@xstate/react';

import { LOCAL_STORAGE_KEYS } from '../../constants';
import { appMachine } from '../../stateMachines';
import GlobalAppContext from './context';

const getInitialIsDarkMode = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(
      LOCAL_STORAGE_KEYS.DARK_MODE
    );
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return JSON.stringify(true);
    }
  }

  return JSON.stringify(false);
};

const GlobalContextProvider: FunctionComponent<{}> = ({ children }) => {
  const [isDarkModeString, setIsDarkMode] = useState(getInitialIsDarkMode);

  // Theme
  const isDarkMode = isDarkModeString === 'true';
  const currentTheme = isDarkMode ? 'dark' : 'light';
  const nextTheme = isDarkMode ? 'light' : 'dark';

  // Services
  const appService = useInterpret(appMachine);

  useEffect(() => {
    const updateTheme = (): void => {
      const root = window.document.documentElement;

      // Update theme on page
      root.classList.remove(currentTheme);
      root.classList.add(nextTheme);

      // Update theme in storage
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.DARK_MODE,
        JSON.stringify(isDarkMode)
      );
    };
    updateTheme();
  }, [isDarkMode, currentTheme, nextTheme]);

  const toggleIsDarkMode = () =>
    setIsDarkMode(() => JSON.stringify(!isDarkMode));

  const context = {
    isDarkMode,
    toggleIsDarkMode,
    appService,
  };
  return (
    <GlobalAppContext.Provider value={context}>
      {children}
    </GlobalAppContext.Provider>
  );
};

export default GlobalContextProvider;
