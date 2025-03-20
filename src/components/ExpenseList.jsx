import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseList = () => {
  const { expenses } = useSelector(state => state.expense);

  return (
    <div className="w-full max-w-4xl mx-auto mt-6">
      {expenses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 border border-gray-200 shadow-lg rounded-lg">
            <thead className="text-xs text-white uppercase bg-gray-800">
              <tr>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 bg-white hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-4 py-3 font-medium">${expense.amount}</td>
                  <td className="px-4 py-3">{expense.name}</td>
                  <td className="px-4 py-3">{expense.category}</td>
                  <td className="px-4 py-3">{expense.date}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      expense.transaction === 'income' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {expense.transaction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-6">No transactions found!</div>
      )}
    </div>
  );
};

export default ExpenseList;
