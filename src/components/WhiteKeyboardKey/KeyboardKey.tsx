import { FunctionComponent } from 'react';

const WhiteKeyboardKey: FunctionComponent<{
  letter: string;
  letterKey: string;
}> = ({ letter, letterKey }) => (
  <span
    className="w-8 h-12 inline-flex items-center justify-center font-black p-30 text-black dark:text-white outline outline-gray-500"
    key={letterKey}
  >
    {letter}
  </span>
);

export default WhiteKeyboardKey;
