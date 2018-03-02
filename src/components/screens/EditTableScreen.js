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
import FooterMain from '../footers/FooterMain'; //TODO такой же вроде
import EditProduct from '../EditProduct';

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

       <FooterMain />
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
