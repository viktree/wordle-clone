import { FunctionComponent } from 'react';
import { compose, flatten, map } from 'ramda';

import { GlobalContextProvider, Toggle } from '..';
import {
  Background,
  BackspaceKey,
  EnterKey,
  InfoButton,
  SettingsButton,
  Title,
  WhiteKeyboardKey,
  WhiteLetter,
} from '../../components';
import { FlexCenter, LeftCenterRight } from '../../layouts';

import './App.css';

const board = [
  ['A', 'U', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const WordleBoard: FunctionComponent<{
  board: string[][];
  Letter: FunctionComponent<{ letter: string }>;
}> = ({ board, Letter }) => {
  const showLetters = compose(
    map(Letter),
    map((letter: string) => ({ letter })),
    flatten
  );

  return <div className="grid grid-cols-5 gap-4">{showLetters(board)}</div>;
};

const WordleKeyboard: FunctionComponent<{}> = () => (
  <div className="p-5  grid grid-rows-3 gap-3">
    <div className="grid grid-cols-10 gap-1">
      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((l, i) => (
        <WhiteKeyboardKey letter={l} letterKey={i.toString()} />
      ))}
    </div>
    <div className="grid grid-cols-11 gap-5 justify-items-center">
      <span />
      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((l, i) => (
        <WhiteKeyboardKey letter={l} letterKey={i.toString()} />
      ))}
      <span />
    </div>
    <div className="grid grid-cols-11 gap-1 justify-items-center">
      <div className="col-span-2">
        <EnterKey />
      </div>
      {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((l, i) => (
        <div className="col-span-1">
          <WhiteKeyboardKey letter={l} letterKey={i.toString()} />
        </div>
      ))}

      <div className="col-span-2">
        <BackspaceKey />
      </div>
    </div>
  </div>
);

const GamePage: FunctionComponent<{}> = () => {
  return (
    <main>
      <FlexCenter>
        <div className="py-10">
          <WordleBoard board={board} Letter={WhiteLetter} />
        </div>
      </FlexCenter>
      <hr />
      <FlexCenter>
        <WordleKeyboard />
      </FlexCenter>
    </main>
  );
};

// const Winner: FunctionComponent<{}> = () => <main>{'Winner!'}</main>;
// const Looser: FunctionComponent<{}> = () => <main>{'Looser!'}</main>;
// const InfoPage: FunctionComponent<{}> = () => <main>{'InfoPage'}</main>;
// const SettingsPage: FunctionComponent<{}> = () => <main>{'Settings'}</main>;

const App: FunctionComponent<{}> = () => {
  return (
    <GlobalContextProvider>
      <Background>
        <header>
          <LeftCenterRight
            left={<InfoButton onClick={() => {}} />}
            center={<Title />}
            right={
              <>
                <SettingsButton onClick={() => {}} />
                <Toggle />
              </>
            }
          />
        </header>
        <GamePage />
        {/* <InfoPage /> */}
        {/* <SettingsPage /> */}
        {/* <Winner /> */}
        {/* <Looser /> */}
      </Background>
    </GlobalContextProvider>
  );
};

export default App;
