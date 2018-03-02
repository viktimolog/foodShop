import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView
} from 'react-native';

import MainScreen from './src/components/screens/MainScreen';
import EditTableScreen from './src/components/screens/EditTableScreen';

export default class FoodShop extends Component {

  constructor(props) {
    super(props);
    this.state = {

      status:'allProducts',
      currentProducts: null,
      screen:'MainScreen',

      products: [
        {id: Math.random(), text: 'Milk 1l', status: 'house'},
        {id: Math.random(), text: 'Eggs Medium 12 pack', status: 'trash'},
        {id: Math.random(), text: 'Fresh Basil', status: 'house'},
        {id: Math.random(), text: 'Wholegrain Bread 1 pkg', status: 'trash'},
        {id: Math.random(), text: 'Ground Coffee 200g', status: 'trash'},
        {id: Math.random(), text: 'Red Wine', status: 'house'},
        {id: Math.random(), text: 'Mozzarella Cheese 150g', status: 'house'},
        {id: Math.random(), text: 'Orange Juice 1l', status: 'trash'},
        {id: Math.random(), text: 'Tomatoes', status: 'house'}
      ],
    };
  }

addProduct = () =>{
alert('addProduct');


}

delProduct = id => {
this.setState({
  products: this.state.products.filter(product => product.id !== id),
});
}

switchToMainScreen = () =>{
  this.setState({ screen: 'MainScreen' });
  }

switchToEditTableScreen = () =>{
this.setState({ screen: 'EditTableScreen' });
}

//это костыль, я знаю
changeProductStatusToTrash = id => {
let tempArr = this.state.products;
for (let i = 0; i < tempArr.length; i++) {
if(tempArr[i].id === id){
tempArr[i].status='trash';
}
this.setState({ products: tempArr });
    }
}

//это костыль, я знаю
changeProductStatusToHouse = id => {
let tempArr = this.state.products;
for (let i = 0; i < tempArr.length; i++) {
if(tempArr[i].id === id){
tempArr[i].status='house';
break;
}
}
this.setState({ products: tempArr });
}

getCurrentProducts = () =>{
if(this.state.status==='allProducts'){
return this.state.products;
}
if(this.state.status==='ProductsInTrash'){
return this.state.products.filter((product) =>
product.status==='trash');
}
}

  allProducts = () =>{
    if(this.state.status!=='allProducts'){
      this.setState({
        status:'allProducts'
      });
    }
  }

onlyProductsInTrash = () =>{
    if(this.state.status!=='ProductsInTrash'){
      this.setState({
          status:'ProductsInTrash'
      });
    }
  }

render() {

//это похоже на костыль
    if(this.state.screen==='MainScreen'){
      return (
              <MainScreen
              currentProducts = {this.getCurrentProducts()}
              changeProductStatusToTrash = {this.changeProductStatusToTrash}
              changeProductStatusToHouse = {this.changeProductStatusToHouse}
              onlyProductsInTrash = {this.onlyProductsInTrash}
              allProducts = {this.allProducts}
              switchToEditTableScreen = {this.switchToEditTableScreen}
              />
      );
    }

    else if(this.state.screen==='EditTableScreen'){
      return (
              <EditTableScreen
              products = {this.state.products}
              switchToMainScreen = {this.switchToMainScreen}
              delProduct = {this.delProduct}
              addProduct = {this.addProduct}
              />
      );
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: 90,
    ...Platform.select({
      ios: {paddingTop: 30}
    })
  },
footer:{
  paddingBottom:0
},
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
