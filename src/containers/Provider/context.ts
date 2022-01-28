import { createContext } from 'react';
import { interpret } from 'xstate';

import { appMachine } from '../../stateMachines';

const GlobalAppContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},

  appService: interpret(appMachine),
});

export default GlobalAppContext;
