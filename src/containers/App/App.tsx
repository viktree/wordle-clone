import { FunctionComponent } from 'react';

import { GlobalContextProvider, Toggle } from '..';
import {
  Background,
  BackspaceKey,
  EnterKey,
  SettingsButton,
  Title,
  WhiteKeyboardKey,
  WhiteLetter,
} from '../../components';
import { LeftCenterRight } from '../../layouts';

import './App.css';

const board = [
  ['A', 'U', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

const mapBoard =
  (mapper: FunctionComponent<{ letter: string; letterKey: string }>) =>
  (board: string[][]) =>
    board.map((row, r) =>
      row.map((letter, c) => mapper({ letter, letterKey: `${r}x${c}` }))
    );

const DisplayBoard: FunctionComponent<{ board: string[][] }> = ({ board }) => (
  <div className="flex justify-center">
    <div className="grid grid-cols-5 gap-4">{mapBoard(WhiteLetter)(board)}</div>
  </div>
);

const Keyboard: FunctionComponent<{}> = () => (
  <div className="p-5  grid grid-rows-3 gap-3 justify-center">
    <div className="grid grid-cols-10 gap-1 justify-center">
      {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((l, i) => (
        <WhiteKeyboardKey letter={l} letterKey={i.toString()} />
      ))}
    </div>
    <div className="grid grid-cols-11 gap-5 justify-items-center justify-center">
      <span />
      {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((l, i) => (
        <WhiteKeyboardKey letter={l} letterKey={i.toString()} />
      ))}
      <span />
    </div>
    <div className="grid grid-cols-11 gap-1 justify-items-center justify-center">
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
      <div className="py-10">
        <DisplayBoard board={board} />
      </div>
      <hr />
      <Keyboard />
    </main>
  );
};

const Winner: FunctionComponent<{}> = () => <main>{'Winner!'}</main>;
const Looser: FunctionComponent<{}> = () => <main>{'Looser!'}</main>;

const InfoPage: FunctionComponent<{}> = () => <main>{'InfoPage'}</main>;
const SettingsPage: FunctionComponent<{}> = () => <main>{'Settings'}</main>;

const App: FunctionComponent<{}> = () => {
  return (
    <GlobalContextProvider>
      <Background>
        <header>
          <nav>
            <LeftCenterRight
              left={<span className="ml-2">{'right'}</span>}
              center={<Title />}
              right={
                <>
                  <SettingsButton onClick={() => {}} />
                  <Toggle />
                </>
              }
            />
          </nav>
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
