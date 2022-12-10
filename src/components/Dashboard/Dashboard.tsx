import React, { useEffect, useState } from 'react';
import Actions, { Action, GameAction } from '../Actions/Actions';
import { shuffleArray } from '../../helper/shuffle';
import {
  Card,
  EndScoreEffect,
  Icon,
  IncomeEffect,
  Map,
  PartnerZoo,
  PermanentEffect,
  ScienceIcon,
} from '../../GameType';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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

  const { icons, money, conservation, reputation, appeal, xToken } =
    useSelector((state: RootState) => state.player);

  const clickActionHandler = (action: Action) => {
    let newActions = [action].concat(actions.filter((a) => a !== action));
    newActions = newActions.map((action, index) => ({
      ...action,
      power: index + 1,
    }));
    setActions(newActions);
  };

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
        Icons : {icons.slice().sort()}
      </span>
      <Actions actions={actions} reArrange={clickActionHandler} />
    </div>
  );
};

export default Dashboard;
