import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './src/redux/store';
import InitialRoutes from './src/routes/InitialRoutes';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <InitialRoutes />
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
