import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';
import HomeScreen from '../screen/Week8Home';
import Product from '../screen/Product';
import AboutUs from '../screen/AboutUs';
import {Icon, View} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import SettingScreen from '../screen/Setting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native';

export const SCREEN_NAME = {
  HOME: 'Home',
  ABOUT_US: 'AboutUs',
  PRODUCT: 'Product',
  SETTING: 'Setting',
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.HOME}
      screenOptions={({navigation}) => {
        return {
          headerRight: props => {
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
            return (
              <Icon
                as={MaterialCommunityIcons}
                name="menu"
                size={8}
                style={{marginRight: 16}}
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            );
          },
        };
      }}>
      <Stack.Screen
        name={SCREEN_NAME.HOME}
        component={HomeScreen}
        // options={{
        //   headerTintColor: 'red',
        //   headerStyle: {backgroundColor: '#ddd'},
        // }}
      />
      <Stack.Screen name={SCREEN_NAME.PRODUCT} component={Product} />
      <Stack.Screen
        name={SCREEN_NAME.ABOUT_US}
        component={AboutUs}
        // options={{
        //   title: 'About Us',
        //   headerTintColor: 'red',
        //   headerStyle: {backgroundColor: '#ddd'},
        // }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <Drawer.Navigator
    // screenOptions={{headerShown: false}}
    >
      <Drawer.Screen
        name={SCREEN_NAME.HOME}
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name={SCREEN_NAME.SETTING} component={SettingScreen} />
    </Drawer.Navigator>
  );
};
