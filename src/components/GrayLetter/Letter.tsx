import { FunctionComponent } from 'react';

const Letter: FunctionComponent<{ letter: string; letterKey: string }> = ({
  letter,
  letterKey,
}) => (
  <span
    className="w-12 h-12 inline-flex items-center justify-center font-black p-30 rounded-lg bg-gray-500 text-white dark:outline outline-gray-500"
    key={letterKey}
  >
    {letter}
  </span>
);

export default Letter;
