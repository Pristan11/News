import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './src/routes/MainRoutes';
import 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <MainRoutes />
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
