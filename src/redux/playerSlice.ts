import { createSlice } from '@reduxjs/toolkit';
import { Player, ScienceIcon, GameAction } from '../GameType';
import { shuffleArray } from '../helper/shuffle';
import { placeAnimalReducer } from './animalReducer';
import actionReducers from './actionReducers';

// Rule (P4 B) : Animal has to be at the first slot to start with
const initialAction = [{ card: GameAction.Animal, level: 1, power: 1 }].concat(
  shuffleArray<GameAction>([
    GameAction.Association,
    GameAction.Card,
    GameAction.Build,
    GameAction.Sponsor,
  ]).map((gameAction, index) => ({
    card: gameAction,
    level: 1,
    power: index + 2,
  }))
);

const initialState: Player = {
  appeal: 0,
  reputation: 0,
  conservation: 0,
  icons: [ScienceIcon.Research, ScienceIcon.Research],
  money: 25,
  xToken: 0,
  actions: initialAction,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    placeAnimal: placeAnimalReducer,
    ...actionReducers,
  },
});

// Action creators are generated for each case reducer function
export const { placeAnimal, playActionCard } = playerSlice.actions;

export default playerSlice.reducer;
