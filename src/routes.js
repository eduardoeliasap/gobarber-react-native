import React from 'react';
/* The createSwitchNavigator storage on a historic navigation */
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

export default (signedIn = false) => createAppContainer(createSwitchNavigator({
  Sign: createSwitchNavigator({
    SignIn,
    SignUp,
  }),
  App: createBottomTabNavigator(
    {
      Dashboard,
      New: {
        screen: createStackNavigator({
          SelectProvider,
          SelectDateTime,
          Confirm,
        }, {
          defaultNavigationOptions: {
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerLeftContainerStyle: {
              marginLeft: 20,
            }, // It will only be applied to New routes
          },
        }),
        navigationOptions: { // Creates a navigation stack
          tabBarVisible: false, // It will clear the status bar when entering these routes. It is necessary to force the user to not navigate routes outside the New routes
          tabBarLabel: 'Agendar',
          tabBarIcon: (
            <Icon name='add-circle-outline' size={20} color="rgba(255, 255, 255, 0.1)" />
          )
        }
      },
      Profile,
    },
    {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: "#8d41a8"
        },
      }
    }
  ),
}, {
  initialRouteName: signedIn ? 'App' : 'Sign'
}),
);
