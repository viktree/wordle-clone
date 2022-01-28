import { FunctionComponent } from 'react';

const LeftCenterRight: FunctionComponent<{
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}> = ({ left, center, right }) => (
  <span className="p-4">
    <span className="grid grid-cols-3 gap-4">
      <span className="flex justify-start align-baseline">
        <span className="ml-4">{left || ''}</span>
      </span>
      <span className="flex justify-center align-baseline">{center || ''}</span>
      <span className="flex justify-end align-baseline">
        <span className="mr-4">{right || ''}</span>
      </span>
    </span>
  </span>
);

export default LeftCenterRight;
