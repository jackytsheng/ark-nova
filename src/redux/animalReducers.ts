import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AnimalCard, Player } from '../GameType';

const placeAnimal: CaseReducer<Player, PayloadAction<AnimalCard>> = (
  state,
  { payload: { bonuses, cost, type } }
) => {
  state.money -= cost;
  state.appeal += bonuses.appeal;
  state.conservation += bonuses.conservation;
  state.reputation += bonuses.reputation;
  state.icons.push(type);
};

export default { placeAnimal };
