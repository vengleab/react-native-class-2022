import React from 'react';
import {Button, Text} from 'react-native';
import {SCREEN_NAME} from '../routes';

export default props => (
  <Text>
    <Button
      onPress={() => props.navigation.navigate(SCREEN_NAME.HOME)}
      title="Go to about screen"
    />
    Product screen
  </Text>
);
