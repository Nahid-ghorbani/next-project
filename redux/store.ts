import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';

import counterSlice from './slices/counterSlice'
import userSlice from './slices/userSlice';
import testSlice from './slices/testSlice';
import daySlice from './slices/daySlice';


export const store = configureStore({
  reducer: {
    counterReducer: counterSlice,
    userReducer: userSlice,
    testReducer: testSlice,
    dayReducer: daySlice
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