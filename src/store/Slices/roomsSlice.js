import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
    room:null
};
const settingsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        getRooms: (state, { payload }) => {
            state.rooms = payload;
        },
        getRoom: (state, { payload }) => {
            state.room = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getRooms,
    getRoom
} = actions;
export default reducer;
