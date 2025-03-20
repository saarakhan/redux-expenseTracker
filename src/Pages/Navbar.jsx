import React from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { IoMailUnreadOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-white shadow-md p-4'>
      <h1 className='text-2xl font-bold text-gray-800'>SaveMyMoney</h1>
      <ul className='flex items-center space-x-6'>
        <li className='text-gray-700 font-medium'>Saara Khan</li>
        <li className='relative cursor-pointer'>
          <IoIosNotifications className='text-gray-600 text-xl hover:text-blue-500 transition duration-200' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1'>3</span>
        </li>
        <li className='relative cursor-pointer'>
          <IoMailUnreadOutline className='text-gray-600 text-xl hover:text-blue-500 transition duration-200' />
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1'>5</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
