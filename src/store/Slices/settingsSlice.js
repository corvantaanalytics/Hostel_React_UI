import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    openai:null
};
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        getUserDetailsDispatch: (state, { payload }) => {
            state.user = payload;
        },
        setSettingsLoading: (state, { payload }) => {
            state.loading = payload;
        },
        getOpenAIKeyDispatch: (state, { payload }) => {
            state.openai = payload;
        },
    },
});

const { reducer, actions } = settingsSlice;

export const {
    getUserDetailsDispatch,
    setSettingsLoading,
    getOpenAIKeyDispatch
} = actions;
export default reducer;
