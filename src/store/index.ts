import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { baseAPI } from 'services/ApiService';
import userReducer from 'store/slices/userSlice';

const rootReducer = combineReducers({
  userReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPI.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
