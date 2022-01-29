import { FunctionComponent } from 'react';

const YellowKeyboardKey: FunctionComponent<{
  letter: string;
  index: number;
}> = ({ letter, index }) => (
  <span
    className="w-8 h-12 inline-flex items-center justify-center font-black p-30 bg-yellow-500 text-white"
    key={index}
  >
    {letter}
  </span>
);

export default YellowKeyboardKey;
