import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Home from './components/Home';
import CurrencyConverter from './components/CurrencyConverter';
import CurrentCourses from './containers/CurrentCourses';


const App = (AppNavigator) => (
  <CurrentCourses props={AppNavigator}/>
)

const AppNavigator = createStackNavigator({
  CurrentCourses: {
    screen: App,
  },
  CurrencyConverter: {
    screen: CurrencyConverter,
  },
});

export default createAppContainer(AppNavigator);
