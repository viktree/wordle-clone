import { FunctionComponent } from 'react';

const WhiteKeyboardKey: FunctionComponent<{
  letter: string;
  index: string;
}> = ({ letter, index }) => (
  <span
    className="w-8 h-12 inline-flex items-center justify-center font-black p-30 text-black dark:text-white outline outline-gray-500"
    key={index}
  >
    {letter}
  </span>
);

export default WhiteKeyboardKey;
