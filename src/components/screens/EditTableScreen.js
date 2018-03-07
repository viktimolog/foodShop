import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import HeaderEditTable from '../headers/HeaderEditTable';
import FooterMain from '../footers/FooterMain';
import EditProduct from '../EditProduct';
import styles from '../../Styles';

export default class EditTableScreen extends Component {

render() {
    return (
      <View style={styles.container}>

      <HeaderEditTable
      switchToMainScreen = {this.props.switchToMainScreen}
      addProduct = {this.props.addProduct}
       />

       <ScrollView>
       {
           this.props.products.map(product =>

               <EditProduct
               product={product}
               key={product.id}
               delProduct = {this.props.delProduct}
               />
           )
       }
       </ScrollView>

       <View>
       <FooterMain
       setAllProductsOrOnlyInTrash = {this.props.setAllProductsOrOnlyInTrash}
       trash = {this.props.trash}
       />
       </View>

      </View>
    );
  }
}
