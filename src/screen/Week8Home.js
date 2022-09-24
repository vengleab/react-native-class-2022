import React from 'react';
import {Button, Text} from 'react-native';
import {SCREEN_NAME} from '../routes';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const handleNavigation = screen => {
    return () => {
      // navigation to screen
      // alert('navigation to ' + screen);

      /* navigation is only accessible
       ** from top level component of the screen
       */
      // props.navigation.navigate(screen);
      navigation.navigate(screen);
    };
  };

  return (
    <Text>
      <Button
        onPress={handleNavigation(SCREEN_NAME.PRODUCT)}
        title="Go to product screen"
      />
      <Button
        onPress={handleNavigation(SCREEN_NAME.ABOUT_US)}
        title="Go to about screen"
      />
    </Text>
  );
};
