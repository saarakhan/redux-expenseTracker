import { configureStore } from "@reduxjs/toolkit";
import { ExpenseSlice } from "./slice/ExpenseSlice";

export const store = configureStore({
    reducer: {
        expense: ExpenseSlice.reducer
    }
})