import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

const reducer = combineReducers({
    user: userSlice
})

export const store = configureStore({reducer});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
