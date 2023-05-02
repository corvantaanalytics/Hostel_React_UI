import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locations: [],
};
const settingsSlice = createSlice({
    name: 'locations',
    initialState,
    reducers: {
        getLocations: (state, { payload }) => {
            state.locations = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getLocations,
} = actions;
export default reducer;
