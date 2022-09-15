import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Button from '../common/Button';
export default () => {
  return (
    <SafeAreaView>
      {/* <Button onPress={() => alert('Click me')} title="Click me" />
      <Button onPress={() => alert('Press me')} title="Press me" /> */}
      <Button onClick={() => alert('Click')} color="aqua">
        Click me
      </Button>
      <Button>Press me</Button>
    </SafeAreaView>
  );
};
