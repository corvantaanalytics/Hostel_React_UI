import { configureStore } from '@reduxjs/toolkit'

import hostellersReducer from './Slices/hostellersSlice'
import roomsReducer from './Slices/roomsSlice'
import locationsReducer from './Slices/locationSlice'

const store = configureStore({
  reducer: {
     hostellers: hostellersReducer,
     rooms: roomsReducer,
     locations :locationsReducer
  },
});
export const messageNotifications = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
export * from './Actions';
export * from './Slices';

export default store;
