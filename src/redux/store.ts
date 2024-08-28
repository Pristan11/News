import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
  } from 'react-redux';
  
  import {configureStore} from '@reduxjs/toolkit';
  import {rootPersistConfig, rootReducer} from './rootReducers';
  import {persistReducer, persistStore} from 'redux-persist';
  
  const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }).concat(),
  });
  
  const persistor = persistStore(store);
  export type RootState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  const useSelector = useReduxSelector;
  const useDispatch = () => useReduxDispatch<AppDispatch>();
  
  const {dispatch} = store;
  export {useDispatch, useSelector, store, dispatch, persistor};