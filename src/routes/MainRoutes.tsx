import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils/theme';
import {ROUTES} from '../utils/constants';
import {TabIcon} from '../components/TabIcon';
import CategoryScreen from '../screens/Category';
import BookMark from '../screens/BookMark';
import HomeRoutes from './HomeRoutes';

const BottomTabs = createBottomTabNavigator();

function MainRoutes() {
  return (
    <BottomTabs.Navigator
      initialRouteName={ROUTES.MAIN.ROOT.MAIN}
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
        name={ROUTES.MAIN.ROOT.MAIN}
        component={HomeRoutes}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => <TabIcon name="home" focused={focused} />,
        }}
      />

      <BottomTabs.Screen
        name={ROUTES.MAIN.FILTER}
        component={CategoryScreen}
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
        component={BookMark}
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
