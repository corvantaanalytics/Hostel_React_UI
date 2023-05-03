import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serviceApartments: [],
};
const settingsSlice = createSlice({
    name: 'ServiceApartments',
    initialState,
    reducers: {
        getServiceApartments: (state, { payload }) => {
            state.serviceApartments = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getServiceApartments,
} = actions;
export default reducer;
