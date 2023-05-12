import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
    expense:null
};
const settingsSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        getUserExpenses: (state, { payload }) => {
            state.expenses = payload;
        },
        getExpense: (state, { payload }) => {
            state.expense = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getUserExpenses,
    getExpense
} = actions;
export default reducer;
