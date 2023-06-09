import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { UserState } from 'types';

const initialState: UserState = {
  credentials: {
    idInstance: '',
    apiTokenInstance: '',
    receiverNumber: '',
  },
  isAuth: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Omit<UserState, 'isAuth'>>) => {
      state.credentials = action.payload.credentials;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

export const selectCredentials = (state: RootState) => state.userReducer.credentials;
export const selectAuth = (state: RootState) => state.userReducer.isAuth;
