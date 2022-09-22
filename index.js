/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/screen/Week7Home';
import {name as appName} from './app.json';
import {NativeBaseProvider} from 'native-base';

const MyApp = () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
