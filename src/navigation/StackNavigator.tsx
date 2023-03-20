import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from '../constants/Routes';
import BottomTabs from './BottomTabs';
import colors from '../theme/colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        }}
        name={routes.HOME_SCREEN}
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
