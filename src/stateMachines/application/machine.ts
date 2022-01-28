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
      incrementStreak: () => ({}),
      resetStreaks: () => ({}),
    },
  }
);
const appMachine = appModel.createMachine({
  context: appModel.initialContext,
  initial: 'game',
  states: {
    game: {
      on: {
        changeSettings: 'settings',
        displayInformation: 'info',
        finishGame: 'game_over',
        incrementStreak: {
          actions: [
            appModel.assign({
              currentStreak: (context) => {
                // TODO: Save to local storage somehow
                return context.currentStreak + 1;
              },
            }),
            appModel.assign({
              longestStreak: ({ currentStreak, longestStreak }) => {
                if (currentStreak > longestStreak) {
                  return currentStreak;
                }
                return longestStreak;
              },
            }),
          ],
        },
        resetStreaks: {
          actions: appModel.assign({
            currentStreak: 0,
            longestStreak: 0,
          }),
        },
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
        incrementStreak: {
          actions: [
            appModel.assign({
              currentStreak: ({ currentStreak }) => {
                return currentStreak + 1;
              },
            }),
            appModel.assign({
              longestStreak: ({ currentStreak, longestStreak }) => {
                if (currentStreak > longestStreak) {
                  return currentStreak;
                }
                return longestStreak;
              },
            }),
          ],
        },
        resetStreaks: {
          actions: appModel.assign({
            currentStreak: () => {
              return 0;
            },
          }),
        },
      },
    },
  },
});

export default appMachine;
