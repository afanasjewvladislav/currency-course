import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import Home from './components/Home';
import CurrencyConverter from './components/CurrencyConverter';
import CurrentCourses from './containers/CurrentCourses';

import MainNavigation from './navigation/index'


// const App = AppNavigator => (
//   <CurrentCourses props={AppNavigator}/>
// )


const App = () => {
  console.log('MainNavigation', MainNavigation);
  return (
    // <MainNavigation />
    <CurrentCourses/>
  )
}

// const AppNavigator = createStackNavigator({
//   CurrentCourses: {
//     screen: App,
//   },
//   CurrencyConverter: {
//     screen: CurrencyConverter,
//   },
// });
// const te = createAppContainer(AppNavigator);
// console.log('>', te)

// export default createAppContainer(AppNavigator);


export default App;
