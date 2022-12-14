import {PlayIcon, AddIcon, HStack} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
  return (
    <SafeAreaView>
      <HStack>
        <AddIcon />
        <PlayIcon />
        <Icon
          as={AntDesign}
          name="android1"
          color="coolGray.800"
          _dark={{
            color: 'blue',
          }}
          size={28}
        />
        <Icon as={Entypo} name="app-store" size={28} />
        <Icon as={MaterialCommunityIcons} name="account-arrow-left" size={28} />
      </HStack>
    </SafeAreaView>
  );
};
