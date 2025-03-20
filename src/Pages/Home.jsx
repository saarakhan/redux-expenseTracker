import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Amount from '../components/Amount';
import ExpenseList from '../components/ExpenseList';
import Pdf from '../components/Pdf';

export const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='flex-1 bg-white border border-gray-300 rounded-lg p-6'>
          <ExpenseForm />
        </div>

        <div className='flex-none w-full md:w-[30%]'>
          <Amount />
        </div>
      </div>

      <div className='mt-8 bg-white border border-gray-300 rounded-lg p-6'>
        <ExpenseList />
        <br />
        <Pdf />
      </div>
    </div>
  );
};
