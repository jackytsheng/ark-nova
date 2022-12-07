import React, { useEffect, useState } from 'react';
import Actions, { Action, GameAction } from '../Actions/Actions';
import { shuffleArray } from '../helper/shuffle';
import {
  Card,
  EndScoreEffect,
  Icon,
  IncomeEffect,
  Map,
  PartnerZoo,
  PermanentEffect,
  ScienceIcon,
} from '../handlers/GameType';

type Player = {
  map?: Map;
  appeal: number;
  reputation: number;
  conservation: number;
  icons?: Icon[];
  money: number;
  xToken: number;
  actions: Action[];
  incomeEffect?: IncomeEffect[];
  permanentEffect?: PermanentEffect[];
  engScoreEffect?: EndScoreEffect[];
  cards?: Card[];
  partnerZoo?: PartnerZoo[];
  workers?: Worker[];
};

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

const Dashboard = () => {
  const [actions, setActions] = useState<Action[]>(initialAction);
  const [icons, setIcons] = useState<Icon[]>([
    ScienceIcon.Research,
    ScienceIcon.Research,
  ]);

  const [player, setPlayer] = useState<Player>({
    appeal: 0,
    conservation: 0,
    money: 25,
    reputation: 0,
    xToken: 0,
    actions: initialAction,
  });

  let first_animal = {
    animal_name: 'Shoebill',
    latin_name: 'Balaeniceps rex',
    // enclosure: '1-LBA 1',
    cost: 9,
    type: 'Bird',
    continent: 'Africa',
    requirements: 'Science x2',
    ability: '',
    bonuses: {
      appeal: '3',
      conservation: '1',
      reputation: '0',
    },
  };

  const { money, conservation, reputation, xToken, appeal } = player;

  const clickActionHandler = (action: Action) => {
    let newActions = [action].concat(actions.filter((a) => a !== action));
    newActions = newActions.map((action, index) => ({
      ...action,
      power: index + 1,
    }));
    setActions(newActions);
  };

  // Update Player State
  useEffect(() => {
    setPlayer({
      appeal: 0,
      conservation: 0,
      money: 25,
      reputation: 0,
      xToken: 0,
      actions,
      icons,
    });
  }, [actions]);

  return (
    <div className='w-[900px] flex flex-wrap gap-2 p-4 text-gray-300 border-gray-300 border-2 rounded-lg'>
      <span className='border-gray-300 rounded-full p-4'>Money : {money} </span>
      <span className='border-gray-300 rounded-full p-4'>
        X-Token : {xToken}
      </span>
      <span className='border-gray-300 rounded-full p-4'>
        Conservation : {conservation}
      </span>
      <span className='border-gray-300 rounded-full p-4'>
        Reputation : {reputation}
      </span>
      <span className='border-gray-300 rounded-full p-4'>
        Appeal : {appeal}
      </span>
      <span className='border-gray-300 rounded-full p-4'>
        Icons : {icons.sort()}
      </span>
      <Actions actions={actions} clickAction={clickActionHandler} />
    </div>
  );
};

export default Dashboard;
