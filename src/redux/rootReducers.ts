import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import newsReducer from './slices/news';


const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const rootReducer = combineReducers({
  news: newsReducer
});

export {rootPersistConfig, rootReducer};