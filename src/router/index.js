import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  // Profile: {screen: ProfileScreen},
});

const router = createAppContainer(MainNavigator);

export default router;
