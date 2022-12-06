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
};

type ActionsProps = {
  actions: Action[];
  setActions?: any;
};

const Actions = ({ actions }: ActionsProps) => {
  return (
    <div className='w-[900px] flex items-center justify-between'>
      {actions.map((a) => (
        <ActionCard key={a.card} action={a} />
      ))}
    </div>
  );
};

type ActionProp = {
  action: Action;
};
const ActionCard = ({ action }: ActionProp) => {
  return (
    <div className='w-[160px] h-[260px] flex justify-center pt-2 border-gray-300 border-2 rounded-lg'>
      {action.card} Lv: {action.level}
    </div>
  );
};

export default Actions;
