import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AnimalCard, Player } from '../GameType';

export const placeAnimalReducer: CaseReducer<
  Player,
  PayloadAction<AnimalCard>
> = (state, { payload: { bonuses, cost } }) => {
  console.log('i am called inside reducer');
  state.money -= cost;
  state.appeal += bonuses.appeal;
  state.conservation += bonuses.conservation;
  state.reputation += bonuses.reputation;
};
