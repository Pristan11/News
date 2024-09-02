import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import newsReducer from './slices/news';
import bookMarkReducer from './slices/bookMarkSlice'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  news: newsReducer,
  bookmark: bookMarkReducer
});

export {rootPersistConfig, rootReducer};