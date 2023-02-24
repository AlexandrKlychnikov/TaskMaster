import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import newBoardReducer from './slices/dialogSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: authReducer,
    newBoard: newBoardReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
