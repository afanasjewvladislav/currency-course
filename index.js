import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
// import { StyleSheet, View, Text } from 'react-native'

import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';
import App from './src/App';

const store = configureStore();


const root = () => (
  <Provider store = { store }>
    {/* <View>
      <Text>just red</Text>
      <Text>just bigBlue</Text>
      <Text>bigBlue, then red</Text>
      <Text>red, then bigBlue</Text>
    </View> */}
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => root);
