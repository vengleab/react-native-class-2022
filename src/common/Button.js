import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default props => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View
        style={[
          styles.container,
          props.color && {backgroundColor: props.color},
        ]}>
        {/*
            [{
              padding: 12,
              backgroundColor: 'blue',
              margin: 4,
              borderRadius: 8,
            },
            { backgroundColor: props.color}]

            final ==> 
            {
              padding: 12,
              backgroundColor: 'blue',
              margin: 4,
              borderRadius: 8,
              backgroundColor: props.color
            }
          */}

        <Text style={styles.label}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'blue',
    margin: 4,
    borderRadius: 8,
  },
  label: {
    color: 'white',
    textAlign: 'center',
  },
});
