// import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { useSelector } from 'react-redux'
import CurrencyConverter from '../components/CurrencyConverter';
import App from '../../App';

// const RootNavigation = () => {
//   const screen = useSelector(state => state.Screens.screens);
//   console.log('screen', screen)
//   const AppNavigator = createStackNavigator(screen);
//   // const AppNavigator = createStackNavigator(screen);
//   // createAppContainer(AppNavigator)
//   return createAppContainer(AppNavigator);
// }

// export default RootNavigation;


const AppNavigator = createStackNavigator({
  CurrentCourses: {
    screen: App,
  },
  CurrencyConverter: {
    screen: CurrencyConverter,
  },
});

export default createAppContainer(AppNavigator);


