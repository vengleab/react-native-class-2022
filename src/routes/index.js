import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';
import HomeScreen from '../screen/Week8Home';
import Product from '../screen/Product';
import AboutUs from '../screen/AboutUs';
import {Button} from 'react-native';
import {View} from 'native-base';

export const SCREEN_NAME = {
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
  PRODUCT: 'Product',
};

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={({navigation}) => {
        return {
          headerRight: props => {
            console.log(props);
            if (props.canGoBack) {
              // navigate back to previous
              return (
                // <Button title="back" onPress={() => navigation.goBack()} />
                <HeaderBackButton onPress={() => navigation.goBack()} />
              );
            }
            return;
          },
          headerLeft: () => {
            return <View />;
          },
        };
      }}>
      <Stack.Screen
        name={SCREEN_NAME.HOME}
        component={HomeScreen}
        options={{
          headerTintColor: 'red',
          headerStyle: {backgroundColor: '#ddd'},
        }}
      />
      <Stack.Screen name={SCREEN_NAME.PRODUCT} component={Product} />
      <Stack.Screen
        name={SCREEN_NAME.ABOUT_US}
        component={AboutUs}
        options={{
          title: 'About Us',
          headerTintColor: 'red',
          headerStyle: {backgroundColor: '#ddd'},
        }}
      />
    </Stack.Navigator>
  );
};
