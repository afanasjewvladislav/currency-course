// import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useSelector } from 'react-redux'
import CurrencyConverter from '../components/CurrencyConverter';
import CurrentCourses from '../containers/CurrentCourses';
// import App from '../../App';

// const RootNavigation = () => {
//   const screen = useSelector(state => state.Screens.screens);
//   console.log('screen', screen)
//   const AppNavigator = createStackNavigator(screen);
//   return AppNavigator;
//   // return createAppContainer(AppNavigator);
// }

// // export default RootNavigation;
// export default createAppContainer(RootNavigation);


const AppNavigator = createStackNavigator({
  CurrentCourses: {
    screen: CurrentCourses,
  },
  CurrencyConverter: {
    screen: CurrencyConverter,
  },
},
);

export default createAppContainer(AppNavigator);


