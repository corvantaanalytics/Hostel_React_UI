import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serviceApartments: [],
    serviceApartment:null,
    locationValue:null
};
const settingsSlice = createSlice({
    name: 'ServiceApartments',
    initialState,
    reducers: {
        getServiceApartments: (state, { payload }) => {
            state.serviceApartments = payload;
        },
        getServiceApartment: (state, { payload }) => {
            state.serviceApartment = payload;
        },
        getLocationValue: (state, { payload }) => {
            state.locationValue = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getServiceApartments,
    getServiceApartment,
    getLocationValue    
} = actions;
export default reducer;
