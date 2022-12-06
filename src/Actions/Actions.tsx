import React, { useState } from 'react';
import { shuffleArray } from '../helper/shuffle';

export enum GameAction {
  Animal = 'Animal',
  Card = 'Card',
  Sponsor = 'Sponsor',
  Association = 'Association',
  Build = 'Build',
}

export type Action = {
  card: GameAction;
  level: number;
  power: number;
};

type ActionsProps = {
  actions: Action[];
  clickAction: (action: Action) => void;
};

const Actions = ({ actions, clickAction }: ActionsProps) => {
  return (
    <div className='w-[900px] flex items-center justify-between'>
      {actions.map((a) => (
        <ActionCard key={a.card} action={a} clickAction={clickAction} />
      ))}
    </div>
  );
};

type ActionProp = {
  action: Action;
  clickAction: (action: Action) => void;
};
const ActionCard = ({ action, clickAction }: ActionProp) => {
  return (
    <div
      onClick={() => clickAction(action)}
      className='hover:cursor-pointer w-[160px] h-[160px] flex flex-col items-center justify-start pt-2 border-gray-300 border-2 rounded-lg'
    >
      <div>{action.card}</div>
      <div>Lv: {action.level}</div>
      <div>Power: {action.power}</div>
    </div>
  );
};

export default Actions;
