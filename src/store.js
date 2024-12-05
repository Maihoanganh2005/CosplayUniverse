import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import cosplayReducer from './features/cosplaySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cosplay: cosplayReducer
  }
});

export default store;
