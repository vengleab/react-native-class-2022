import React from 'react';
import {View, ScrollView, TouchableOpacity, FlatList, Text} from 'react-native';
import Product from '../../Product';
import {products} from '../../products.json';

const Products = props => {
  const {products} = props;
  return (
    // <ScrollView>
    //   {products.map(product => {
    //     console.log('production =====>', product);

    //     return (
    //       <Product
    //         key={product.id}
    //         id={product.id}
    //         title={product.title}
    //         description={product.description}
    //         image={product.thumbnail}
    //       />
    //     );
    //   })}
    // </ScrollView>
    <FlatList
      data={products}
      renderItem={prop => {
        // console.log('======>', JSON.stringify(prop));
        const {item: product} = prop;
        return (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.thumbnail}
          />
        );
      }}
    />
  );
};

class ProductsWrapper extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    console.log('On load');
    // fetch('https://dummyjson.com/products')
    //   .then(result => {
    //     return result.json();
    //   })
    //   .then(jsonData => {
    //     console.log('Data', jsonData);
    //     this.setState({data: jsonData.products});
    //   });

    const result = await fetch('https://dummyjson.com/products');
    const jsonData = await result.json();
    this.setState({data: jsonData.products});
  }

  render() {
    console.log('On render');
    return <Products products={this.state.data} />;
  }
}

export default () => {
  console.log(products);
  return (
    <View>
      {/* <Products /> */}
      <ProductsWrapper />
    </View>
  );
};
