import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/theme';
import {ROUTES} from '../utils/constants';
import {TabIcon} from '../components/TabIcon';

import Home from '../screens/Home';

const BottomTabs = createBottomTabNavigator();

function MainRoutes() {
  return (
    <BottomTabs.Navigator
      initialRouteName={ROUTES.MAIN.HOME}
      screenOptions={{
        unmountOnBlur: true,
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.textBlack,
        tabBarStyle: {
          backgroundColor: COLORS.bottomBar,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <BottomTabs.Screen
        name={ROUTES.MAIN.HOME}
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => <TabIcon name="home" focused={focused} />,
        }}
      />

      <BottomTabs.Screen
        name={ROUTES.MAIN.SEARCH}
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <TabIcon name="search" focused={focused} />
          ),
        }}
      />

      <BottomTabs.Screen
        name={ROUTES.MAIN.FILTER}
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <TabIcon name="filter" focused={focused} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.MAIN.BOOK_MARK}
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <TabIcon name="bookmark" focused={focused} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default MainRoutes;
