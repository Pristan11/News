import React from 'react';
import {ROUTES} from '../utils/constants';
import Home from '../screens/Home';
import SearchScreen from '../screens/Search';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.MAIN.ROOT.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.MAIN.ROOT.HOME} component={Home} />
      <Stack.Screen name={ROUTES.MAIN.ROOT.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default HomeRoutes;
