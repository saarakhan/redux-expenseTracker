import React from 'react';
import { useSelector } from 'react-redux';

const Amount = () => {
  const { balance, income, expenditure } = useSelector(state => state.expense);

  return (
    <div className='bg-white border border-gray-300 rounded-lg shadow-sm p-6'>
      <div className='mb-4'>
        <h1 className='text-sm font-semibold text-gray-600'>Total Income</h1>
        <p className='text-3xl font-bold text-green-600'>
          <span className='rupee'>&#8377;</span>
          {income}
        </p>
      </div>
      <div className='mb-4'>
        <h1 className='text-sm font-semibold text-gray-600'>Total Expense</h1>
        <p className='text-3xl font-bold text-red-600'>
          {' '}
          <span className='rupee'>&#8377;</span>
          {expenditure}
        </p>
      </div>
      <div>
        <h1 className='text-sm font-semibold text-gray-600'>Total Balance</h1>
        <p className='text-3xl font-bold text-blue-600'>
          {' '}
          <span className='rupee'>&#8377;</span>
          {balance}
        </p>
      </div>
    </div>
  );
};

export default Amount;
