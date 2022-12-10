import React, { useEffect, useState } from 'react';
import Actions from '../Actions/Actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Dashboard = () => {
  const { icons, money, conservation, reputation, appeal, xToken } =
    useSelector((state: RootState) => state.player);

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
      <Actions />
    </div>
  );
};

export default Dashboard;
