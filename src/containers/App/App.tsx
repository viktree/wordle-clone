import { FunctionComponent, useContext } from 'react';
import { useActor } from '@xstate/react';
import { compose, flatten, map } from 'ramda';

import { GlobalContextProvider, Toggle as ToggleDarkMode, context } from '..';
import {
  Background,
  BackspaceKey,
  EnterKey,
  InfoButton,
  SettingsButton,
  ResumePlayButton,
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

// const Winner: FunctionComponent<{}> = () => <main>{'Winner!'}</main>;
// const Looser: FunctionComponent<{}> = () => <main>{'Looser!'}</main>;

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

const InfoPage: FunctionComponent<{}> = () => (
  <main>
    <FlexCenter>
      <p className="light:text-slate-900 dark:text-white">
        This is how you play the game, yada yada yada
      </p>
    </FlexCenter>
    <br />
    <FlexCenter>
      <ResumePlayButtonAllWiredUp />
    </FlexCenter>
    <br />
    <FlexCenter>
      Too bad you can't reach the settings page from here!
    </FlexCenter>
  </main>
);
const SettingsPage: FunctionComponent<{}> = () => {
  return (
    <main>
      <FlexCenter>
        <p className="light:text-slate-900 dark:text-white">
          Here are some of the game's settings that you can tweak. You can't go
          to the info page from here!
        </p>
      </FlexCenter>
      <br />
      <FlexCenter>
        <div className="grid grid-cols-2 gap-4">
          <ToggleDarkMode />
          <p className="light:text-slate-900 dark:text-white">
            Toggle Dark Mode!
          </p>
        </div>
      </FlexCenter>

      <br />
      <FlexCenter>
        <ResumePlayButtonAllWiredUp />
      </FlexCenter>
      <br />
      <FlexCenter>Too bad you can't reach the info page from here!</FlexCenter>
    </main>
  );
};

const SettingsButtonAllWiredUp = () => {
  const globalServices = useContext(context);
  const [, sendToAppService] = useActor(globalServices.appService);
  return <SettingsButton onClick={() => sendToAppService('changeSettings')} />;
};

const InfoButtonAllWiredUp = () => {
  const globalServices = useContext(context);
  const [, sendToAppService] = useActor(globalServices.appService);
  return <InfoButton onClick={() => sendToAppService('displayInformation')} />;
};

const ResumePlayButtonAllWiredUp = () => {
  const globalServices = useContext(context);
  const [, sendToAppService] = useActor(globalServices.appService);
  return <ResumePlayButton onClick={() => sendToAppService('resumePlaying')} />;
};

const Main = () => {
  const globalServices = useContext(context);
  const [screen] = useActor(globalServices.appService);
  console.log(screen.value);

  return (
    <>
      {screen.matches('game') && <GamePage />}
      {screen.matches('settings') && <SettingsPage />}
      {screen.matches('info') && <InfoPage />}
    </>
  );
};

const App: FunctionComponent<{}> = () => {
  return (
    <GlobalContextProvider>
      <Background>
        <header>
          <LeftCenterRight
            left={<InfoButtonAllWiredUp />}
            center={<Title />}
            right={<SettingsButtonAllWiredUp />}
          />
        </header>
        <Main />
        {/* <GamePage /> */}
        {/* <InfoPage /> */}
        {/*  */}
        {/* <Winner /> */}
        {/* <Looser /> */}
      </Background>
    </GlobalContextProvider>
  );
};

export default App;
