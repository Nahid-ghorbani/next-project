import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import testSlice from './slices/testSlice';
import daySlice from './slices/daySlice';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';


export const store = configureStore({
  reducer: {
    userReducer : userSlice,
    testReducer: testSlice,
    dayReducer: daySlice,
    authReducer: authSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;