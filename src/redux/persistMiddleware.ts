import { Middleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistMiddleware: Middleware = store => next => (action: any) => {
  const result = next(action);

  if (action.type.startsWith('bookmark/')) {
    const state = store.getState();
    AsyncStorage.setItem('bookmarks', JSON.stringify(state.bookmark.bookmarks));
  }

  return result;
};

export default persistMiddleware;
