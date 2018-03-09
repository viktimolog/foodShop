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
import styles from '../../Styles';

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
              changeTrashHouse = {this.props.changeTrashHouse}
              />
          )
      }
      </ScrollView>
      </View>
    );
  }
}
