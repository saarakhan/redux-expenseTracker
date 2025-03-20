import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expenses: [],
  income: 0,
  expenditure: 0,
  balance: 0,
};
export const ExpenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    add: (state, action) => {
      state.expenses.push(action.payload);

      if (action.payload.transaction === 'income') {
        state.income += Number(action.payload.amount);
      } else {
        state.expenditure += Number(action.payload.amount);
      }

      state.balance = state.income - state.expenditure;
    },
  },
});

export const { add } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
