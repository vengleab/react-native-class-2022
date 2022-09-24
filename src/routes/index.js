import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/Week8Home';
import Product from '../screen/Product';
import AboutUs from '../screen/AboutUs';

export const SCREEN_NAME = {
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
  PRODUCT: 'Product',
};

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_NAME.HOME}>
      <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREEN_NAME.PRODUCT} component={Product} />
      <Stack.Screen name={SCREEN_NAME.ABOUT_US} component={AboutUs} />
    </Stack.Navigator>
  );
};
