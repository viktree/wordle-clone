import { createModel } from 'xstate/lib/model';

const appModel = createModel(
  {
    currentStreak: 0, // TODO: Save to local storage somehow
    longestStreak: 0, // TODO: Save to local storage somehow
  },
  {
    events: {
      changeSettings: () => ({}),
      displayInformation: () => ({}),
      resumePlaying: () => ({}),
      finishGame: () => ({}),
      newGame: () => ({}),
      incrementStreaks: () => ({}),
      resetStreaks: () => ({}),
    },
  }
);
const appMachine = appModel.createMachine(
  {
    context: appModel.initialContext,
    initial: 'game',
    states: {
      game: {
        on: {
          changeSettings: 'settings',
          displayInformation: 'info',
          finishGame: 'game_over',
        },
      },
      settings: {
        on: {
          resumePlaying: {
            target: 'game',
          },
        },
      },
      info: {
        on: {
          resumePlaying: {
            target: 'game',
          },
        },
      },
      game_over: {
        on: {
          newGame: {
            target: 'game',
          },
          incrementStreaks: {
            actions: ['incrementStreaks'],
          },
          resetStreaks: {
            actions: ['resetCurrentStreak'],
          },
        },
      },
    },
  },
  {
    actions: {
      resetCurrentStreak: appModel.assign({
        currentStreak: 0,
      }),
      incrementStreaks: appModel.assign({
        currentStreak: ({ currentStreak }) => {
          return currentStreak + 1;
        },
        longestStreak: ({ currentStreak, longestStreak }) => {
          if (currentStreak > longestStreak) {
            return currentStreak;
          }
          return longestStreak;
        },
      }),
    },
    guards: {},
  }
);

export default appMachine;
