import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hostellers: [],
};
const settingsSlice = createSlice({
    name: 'hostellers',
    initialState,
    reducers: {
        getHostellers: (state, { payload }) => {
            state.hostellers = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getHostellers,
} = actions;
export default reducer;
