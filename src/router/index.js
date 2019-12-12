// import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './components/Home'
import SecondScreen from './components/SecondScreen'
import Five from './components/Five'

// const App = (AppNavigator) => (
//     <Home props={AppNavigator}/>
// )

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  SecondScreen: {
    screen: SecondScreen,
  },
  Five: {
    screen: Five,
  },
});

export default createAppContainer(AppNavigator);
