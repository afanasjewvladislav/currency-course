import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import MainScreen from '../containers/MainScreen';
import CurrencyConverterScreen from '../containers/CurrencyConverterScreen';

import HomeIcon from "../components/icon/HomeIcon.js";
import MoneyBagIcon from "../components/icon/MoneyBagIcon.js";

const MainTabNavigator = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <HomeIcon
            color={focused ? '#CE3A6E' : 'rgb(66,92,129)'}
            width={30}
            height={30}
          />
        )
      },
    }),
  },
  CurrencyConverterScreen: {
    screen: CurrencyConverterScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ focused }) => {
        return (
          <MoneyBagIcon
            color={focused ? '#CE3A6E' : 'rgb(66,92,129)'}
            width={32}
            height={32}
          />
        )
      },
    }),
  },
},
  {
    tabBarOptions: {
      showLabel: false,
      keyboardHidesTabBar: false,
      style: {
        backgroundColor: '#041E43',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: 54,
        margin: 0,
        borderTopWidth: 0,
      }
    },
  }
);
export const MainLayer = createStackNavigator({
  Main: {
    screen: MainTabNavigator,
    navigationOptions: ({
      headerShown: false,
    }),
  },
},
);
