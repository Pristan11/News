import React from 'react';
import {ROUTES} from '../utils/constants';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import MainRoutes from './MainRoutes';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

function InitialRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.INITIAL.SIGN_IN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.MAIN.ROOT.HOME} component={SignIn} />
      <Stack.Screen name={ROUTES.MAIN.ROOT.SEARCH} component={MainRoutes} />
    </Stack.Navigator>
  );
}

export default InitialRoutes;
