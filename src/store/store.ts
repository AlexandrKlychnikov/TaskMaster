import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import authReducer from './slices/authSlice';
import boardReducer from './slices/dialogSlice';
import boardsReducer from './slices/boardsSlice';
import loadReducer from './slices/loadSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: authReducer,
    board: boardReducer,
    allBoards: boardsReducer,
    loading: loadReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
