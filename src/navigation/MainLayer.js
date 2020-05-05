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
            width={25}
            height={25}
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
            width={28}
            height={28}
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
        backgroundColor: 'rgb(4,30,67)',
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
