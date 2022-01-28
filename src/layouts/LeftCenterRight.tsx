import { FunctionComponent } from 'react';

const LeftCenterRight: FunctionComponent<{
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}> = ({ left, center, right }) => (
  <span className="p-4">
    <span className="grid grid-cols-3 gap-4">
      <span>{left || ''}</span>
      <span className="flex justify-center">{center || ''}</span>
      <span className="flex justify-end">{right || ''}</span>
    </span>
  </span>
);

export default LeftCenterRight;
