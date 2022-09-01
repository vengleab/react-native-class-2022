import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

class Product extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => alert(this.props.id)}>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableWithoutFeedback>
        <Text>{this.props.description}</Text>
        <Image source={{uri: this.props.image}} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 25,
  },
  container: {
    margin: 8,
    // borderWidth: 1,
    // borderColor: '#000',
    borderRadius: 12,
    overflow: 'hidden',
    // elevation: 0.1,
    // shadowColor: '#000',
    // shadowOffset: {width: 2, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
});

export default Product;
