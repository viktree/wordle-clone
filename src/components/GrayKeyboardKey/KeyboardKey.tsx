import { FunctionComponent } from 'react';

const GrayKeyboardKey: FunctionComponent<{
  letter: string;
  index: number;
}> = ({ letter, index }) => (
  <button
    className="w-8 h-12 inline-flex items-center justify-center font-black p-30 bg-gray-500 text-white"
    key={index}
  >
    {letter}
  </button>
);

export default GrayKeyboardKey;
