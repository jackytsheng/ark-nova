import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Action,
  AnimalCard,
  AnimalIcon,
  CardType,
  ContinentIcon,
  GameAction,
  ScienceIcon,
} from '../../GameType';
import { placeAnimal, playActionCard } from '../../redux/playerSlice';
import { RootState } from '../../redux/store';

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
const Actions = () => {
  const dispatch = useDispatch();
  const { actions } = useSelector((state: RootState) => state.player);

  const useOnClickedActions = (action: Action, dispatch: Dispatch<any>) => {
    switch (action.card) {
      case GameAction.Animal:
        return dispatch(placeAnimal(firstAnimal));
      default:
        return dispatch(playActionCard(action));
    }
  };

  return (
    <div className='w-[900px] flex items-center justify-between'>
      {actions?.map((a) => (
        <ActionCard
          key={a.card}
          action={a}
          clickAction={() => useOnClickedActions(a, dispatch)}
        />
      ))}
    </div>
  );
};

type ActionProp = {
  action: Action;
  clickAction: () => void;
};
const ActionCard = ({ action, clickAction }: ActionProp) => {
  return (
    <div
      onClick={() => {
        clickAction();
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
