import { FunctionComponent, MouseEventHandler } from 'react';

const ResumePlayButton: FunctionComponent<{
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => (
  <button
    className="px-2 h-full inline-flex items-center justify-center font-black p-30 outline outline-gray-500 dark:text-white"
    onClick={onClick}
  >
    RESUME
  </button>
);

export default ResumePlayButton;
