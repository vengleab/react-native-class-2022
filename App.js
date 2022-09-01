import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import Product from './Product';
import {products} from './products.json';

const Products = () => {
  return (
    <ScrollView>
      {products.map(product => {
        console.log('production =====>', product);

        return (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
          />
        );
      })}
    </ScrollView>
  );
};

export default () => {
  console.log(products);
  return (
    <View>
      <Products />
    </View>
  );
};
