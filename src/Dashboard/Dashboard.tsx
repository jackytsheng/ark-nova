import React, { useEffect, useState } from 'react';
import Actions, { Action, GameAction } from '../Actions/Actions';
import { shuffleArray } from '../helper/shuffle';

type Map = {};

enum ContinentIcon {
  Asia,
  Africa,
  America,
  Australia,
  Europe,
}

enum AnimalIcon {
  Bird,
  Predator,
  Herbivore,
  Primate,
  Pet,
  Bear,
  Reptile,
}

enum MapIcon {
  Rock,
  Water,
}

enum ScienceIcon {
  Research,
}

type Icon = MapIcon | ScienceIcon | ContinentIcon | MapIcon;

type IncomeEffect = {};
type PermanentEffect = {};

enum CardType {
  Sponsor,
  Project,
  Animal,
}
type Card = {
  type: CardType;
};
type Worker = {
  isWorking: boolean;
};
enum PartnerZoo {
  Asia,
  Africa,
  America,
  Australia,
  Europe,
}

type EndScoreEffect = {};
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

  const [player, setPlayer] = useState<Player>({
    appeal: 0,
    conservation: 0,
    money: 25,
    reputation: 0,
    xToken: 0,
    actions: initialAction,
  });

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
      <Actions actions={actions} clickAction={clickActionHandler} />
    </div>
  );
};

export default Dashboard;
