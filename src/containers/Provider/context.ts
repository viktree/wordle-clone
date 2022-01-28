import { createContext } from 'react';
// import { interpret } from "xstate";

const GlobalAppContext = createContext({
  isDarkMode: false,
  toggleIsDarkMode: () => {},
});

export default GlobalAppContext;
