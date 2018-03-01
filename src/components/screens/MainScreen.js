import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView
} from 'react-native';

import HeaderMain from '../headers/HeaderMain';
import FooterMain from '../footers/FooterMain';
import Product from '../Product';

export default class MainScreen extends Component {

  render() {

    return (
      <View style={styles.container}>
      <HeaderMain
      switchToEditTableScreen = {this.props.switchToEditTableScreen}
      />
      <ScrollView>
      {
          this.props.currentProducts.map(product =>
              <Product
              product={product}
              key={product.id}
              changeProductStatusToTrash = {this.props.changeProductStatusToTrash}
              changeProductStatusToHouse = {this.props.changeProductStatusToHouse}
              />
          )
      }
      </ScrollView>

      <View>
      <FooterMain
      onlyProductsInTrash = {this.props.onlyProductsInTrash}
      allProducts = {this.props.allProducts}
      />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 90,
    ...Platform.select({
      ios: {paddingTop: 30}
    })
  }
})
