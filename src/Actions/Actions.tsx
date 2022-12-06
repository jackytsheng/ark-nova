import React, { useState } from 'react';
import { shuffleArray } from '../helper/shuffle';

enum GameActions {
  Animal = 'Animal',
  Card = 'Card',
  Sponsor = 'Sponsor',
  Association = 'Association',
  Build = 'Build',
}

const Actions = () => {
  const [actions, setActions] = useState(
    [GameActions.Animal].concat(
      shuffleArray<GameActions>([
        GameActions.Association,
        GameActions.Card,
        GameActions.Build,
        GameActions.Sponsor,
      ])
    )
  );

  return (
    <div className='w-[900px] p-4 flex items-center justify-between border-gray-300 border-2 rounded-lg'>
      {actions.map((a) => (
        <Action key={a} name={a} />
      ))}
    </div>
  );
};

type ActionProp = {
  name: GameActions;
};
const Action = ({ name }: ActionProp) => {
  return (
    <div className='w-[160px] h-[260px] flex justify-center pt-2 border-gray-300 border-2 rounded-lg'>
      {name}
    </div>
  );
};

export default Actions;
