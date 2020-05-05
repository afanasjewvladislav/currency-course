import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { MainLayer } from "./MainLayer";


const AppNavigator = createSwitchNavigator({
  Root: MainLayer,
},{
  initialRouteName: "Root",
  cardStyle: { shadowColor: 'transparent' },
  navigationOptions: () => ({
    headerForceInset: { top: 'never' },
  }),
});

export default createAppContainer(AppNavigator);
