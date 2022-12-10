import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { Action, Player } from '../GameType';

const playActionCard: CaseReducer<Player, PayloadAction<Action>> = (
  state,
  { payload: actionCard }
) => {
  if (!state.actions) return state.actions;

  // Rule P8 : Move used action to the first slot, then slide to the right.
  let newActions = [actionCard].concat(
    state.actions.filter((a) => a.card !== actionCard.card)
  );
  newActions = newActions.map((action, index) => ({
    ...action,
    power: index + 1,
  }));
  state.actions = newActions;
};

export default { playActionCard };
