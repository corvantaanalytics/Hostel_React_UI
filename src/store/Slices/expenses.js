import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
};
const settingsSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        getUserExpenses: (state, { payload }) => {
            state.expenses = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getUserExpenses,
} = actions;
export default reducer;
