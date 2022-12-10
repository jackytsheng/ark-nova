import React, { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import {
  AnimalCard,
  AnimalIcon,
  CardType,
  ContinentIcon,
  ScienceIcon,
} from '../../GameType';
import { placeAnimal } from '../../redux/playerSlice';

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
  reArrange: (action: Action) => void;
};

let firstAnimal: AnimalCard = {
  animalName: 'Shoebill',
  latinName: 'Balaeniceps rex',
  // enclosure: '1-LBA 1',
  cost: 9,
  cardType: CardType.Animal,
  type: AnimalIcon.Bird,
  continent: ContinentIcon.Africa,
  requirements: [ScienceIcon.Research, ScienceIcon.Research],
  // ability: '',
  bonuses: {
    appeal: 3,
    conservation: 1,
    reputation: 0,
  },
};
const Actions = ({ actions, reArrange }: ActionsProps) => {
  const dispatch = useDispatch();

  const useOnClickedActions = (action: Action, dispatch: Dispatch<any>) => {
    switch (action.card) {
      case GameAction.Animal:
        return dispatch(placeAnimal(firstAnimal));
      default:
        return () => {};
    }
  };

  return (
    <div className='w-[900px] flex items-center justify-between'>
      {actions.map((a) => (
        <ActionCard
          key={a.card}
          action={a}
          clickAction={() => useOnClickedActions(a, dispatch)}
          callback={() => reArrange(a)}
        />
      ))}
    </div>
  );
};

type ActionProp = {
  action: Action;
  clickAction: () => void;
  callback: () => void;
};
const ActionCard = ({ action, clickAction, callback }: ActionProp) => {
  return (
    <div
      onClick={() => {
        clickAction();
        callback();
      }}
      className='hover:cursor-pointer w-[160px] h-[160px] flex flex-col items-center justify-start pt-2 border-gray-300 border-2 rounded-lg'
    >
      <div>{action.card}</div>
      <div>Lv: {action.level}</div>
      <div>Power: {action.power}</div>
    </div>
  );
};

export default Actions;
