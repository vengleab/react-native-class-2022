import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton} from '@react-navigation/elements';
import HomeScreen from '../screen/Week8Home';
import Product from '../screen/Product';
import AboutUs from '../screen/AboutUs';
import {Icon, View, Image, Center} from 'native-base';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import SettingScreen from '../screen/Setting';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, ImageBackground, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const MaterialCommunityIconComponent = otherProps => {
  return <Icon as={MaterialCommunityIcons} size={4} {...otherProps} />;
};

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <Center>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
          }}
          size="xl"
          // style={{height: '100%'}}
        />
      </Center>
      {/* <DrawerItemList {...props} /> */}
      {[
        {name: SCREEN_NAME.HOME, icon: 'folder-home'},
        {name: SCREEN_NAME.ABOUT_US, icon: 'card-account-mail-outline'},
      ].map(({name, icon}) => {
        return (
          <DrawerItem
            icon={() => <MaterialCommunityIconComponent name={icon} />}
            label={name}
            onPress={() => navigation.navigate(name)}
          />
        );
      })}
      <DrawerItem
        label="Logout"
        onPress={() => {
          // clear session
          // remove data
          alert('Logout');
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
      />
    </DrawerContentScrollView>
  );
}

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
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name={SCREEN_NAME.HOME}
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name={SCREEN_NAME.SETTING} component={SettingScreen} />
    </Drawer.Navigator>
  );
};
