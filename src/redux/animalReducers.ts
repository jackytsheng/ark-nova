import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AnimalCard, Player } from '../GameType';

const placeAnimal: CaseReducer<Player, PayloadAction<AnimalCard>> = (
  state,
  { payload: { bonuses, cost } }
) => {
  state.money -= cost;
  state.appeal += bonuses.appeal;
  state.conservation += bonuses.conservation;
  state.reputation += bonuses.reputation;
};

export default { placeAnimal };
