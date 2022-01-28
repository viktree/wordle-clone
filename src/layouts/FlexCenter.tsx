import { FunctionComponent } from 'react';

const FlexCenter: FunctionComponent<{}> = ({ children }) => (
  <div className="flex justify-center">{children}</div>
);

export default FlexCenter;
