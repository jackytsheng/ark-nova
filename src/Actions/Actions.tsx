import React from 'react';

const Actions = () => {
  return (
    <div className='w-[900px] p-4 flex items-center justify-between border-gray-300 border-2 rounded-lg'>
      <Action name='Animal' />
      <Action name='Card' />
      <Action name='Build' />
      <Action name='Sponsor' />
      <Action name='Association' />
    </div>
  );
};

type ActionProp = {
  name: string;
};
const Action = ({ name }: ActionProp) => {
  return (
    <div className='w-[160px] h-[260px] flex justify-center pt-2 border-gray-300 border-2 rounded-lg'>
      {name}
    </div>
  );
};

export default Actions;
