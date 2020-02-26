import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore'; 

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent('rncouse', () => RNRedux);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('rncouse', { rootTag });
}
