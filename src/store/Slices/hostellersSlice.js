import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hostellers: [],
    hosteller:null
};
const settingsSlice = createSlice({
    name: 'hostellers',
    initialState,
    reducers: {
        getHostellers: (state, { payload }) => {
            state.hostellers = payload;
        },
        getHosteller: (state, { payload }) => {
            state.hosteller = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getHostellers,
    getHosteller
} = actions;
export default reducer;
