import React, { useId, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { add } from '../redux/slice/ExpenseSlice';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const initialFormState = {
    id: useId(),
    amount: '',
    date: new Date().toISOString().split('T')[0],
    name: '',
    category: '',
    transaction: '',
  };
  const [formData, setFormData] = useState(initialFormState);
  const changeHandler = event => {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const setTransactionType = type => {
    setFormData(prevData => ({
      ...prevData,
      transaction: type,
    }));
  };
  const submitHandler = event => {
    event.preventDefault();
    dispatch(add(formData));
    toast.success('expense added');
    setFormData(initialFormState);
  };

  return (
    <div className='max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6'>
      <h2 className='text-xl font-semibold text-gray-700 mb-4'>Add Transaction</h2>
      <form onSubmit={submitHandler} className='grid grid-cols-2 gap-4'>
        <div>
          <label className='block text-gray-600 font-medium'>Amount</label>
          <input
            type='number'
            name='amount'
            placeholder='Enter amount'
            required
            min={0}
            value={formData.amount}
            onChange={changeHandler}
            className='w-full p-2 border rounded-md focus:ring focus:ring-blue-200'
          />
        </div>

        <div>
          <label className='block text-gray-600 font-medium'>Date</label>
          <input type='date' name='date' required value={formData.date} onChange={changeHandler} className='w-full p-2 border rounded-md focus:ring focus:ring-blue-200' />
        </div>

        <div>
          <label className='block text-gray-600 font-medium'>Name</label>
          <input type='text' name='name' placeholder='Enter name' required value={formData.name} onChange={changeHandler} className='w-full p-2 border rounded-md focus:ring focus:ring-blue-200' />
        </div>

        <div>
          <label className='block text-gray-600 font-medium'>Category</label>
          <input
            type='text'
            name='category'
            placeholder='Enter category'
            required
            value={formData.category}
            onChange={changeHandler}
            className='w-full p-2 border rounded-md focus:ring focus:ring-blue-200'
          />
        </div>

        {['income', 'expenditure'].map(type => {
          return (
            <button
              key={type}
              className={`  p-2 rounded-lg font-semibold cursor-pointer 
                ${type == 'income' ? 'bg-green-300 hover:bg-green-400' : 'bg-red-300 hover:bg-red-400'}
                `}
              onClick={() => setTransactionType(type)}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </form>
    </div>
  );
};

export default ExpenseForm;
