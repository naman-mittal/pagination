import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../constants/Routes';
import NativeBridge from '../screens/NativeBridge';
import Pagination from '../screens/Pagination';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontSize: 16, fontWeight: 'bold'},
        tabBarActiveTintColor: colors.onPrimary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tabs.Screen
        options={{
          tabBarLabel: 'Pagination',
          tabBarIcon: ({color, size}) => (
            <Icon name="infinity" color={color} size={size} />
          ),
        }}
        name={routes.PAGINATION_TAB}
        component={Pagination}
      />
      <Tabs.Screen
        name={routes.SEARCH_TAB}
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.NATIVE_BRIDGE_TAB}
        component={NativeBridge}
        options={{
          tabBarLabel: 'Native Bridge',
          tabBarIcon: ({color, size}) => (
            <Icon name="bridge" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
