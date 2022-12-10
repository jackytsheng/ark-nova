import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, ScienceIcon } from '../GameType';
import { placeAnimalReducer } from './animalReducer';

const initialState: Player = {
  appeal: 0,
  reputation: 0,
  conservation: 0,
  icons: [ScienceIcon.Research, ScienceIcon.Research],
  money: 25,
  xToken: 0,
  actions: [],
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    placeAnimal: placeAnimalReducer,
  },
});

// Action creators are generated for each case reducer function
export const { placeAnimal } = playerSlice.actions;

export default playerSlice.reducer;
