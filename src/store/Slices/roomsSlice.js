import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
};
const settingsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        getRooms: (state, { payload }) => {
            state.rooms = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getRooms,
} = actions;
export default reducer;
