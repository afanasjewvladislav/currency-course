import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import {name as appName} from './app.json';
import configureStore from './src/store/configureStore';
import App from './src/App';

const store = configureStore();
// console.log('>>', store);


const root = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => root);
