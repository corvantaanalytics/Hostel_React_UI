import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locations: [],
    location:null
};
const settingsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        getLocations: (state, { payload }) => {
            state.locations = payload;
        },
        getLocation: (state, { payload }) => {
            state.location = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getLocation,
    getLocations,
} = actions;
export default reducer;
