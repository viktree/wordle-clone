import { FunctionComponent } from 'react';

const Letter: FunctionComponent<{ letter: string; index: number }> = ({
  letter,
  index,
}) => (
  <span
    className="w-12 h-12 inline-flex items-center justify-center font-black p-30 rounded-lg bg-yellow-500 text-white"
    key={index}
  >
    {letter}
  </span>
);

export default Letter;
