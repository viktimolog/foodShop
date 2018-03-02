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

      trash: false,
      currentProducts: null,
      screen:'MainScreen',

      products: [
        {id: Math.random(), text: 'Milk 1l', trash: false},
        {id: Math.random(), text: 'Eggs Medium 12 pack', trash: true},
        {id: Math.random(), text: 'Fresh Basil', trash: false},
        {id: Math.random(), text: 'Wholegrain Bread 1 pkg', trash: true},
        {id: Math.random(), text: 'Ground Coffee 200g', trash: true},
        {id: Math.random(), text: 'Red Wine', trash: false},
        {id: Math.random(), text: 'Mozzarella Cheese 150g', trash: false},
        {id: Math.random(), text: 'Orange Juice 1l', trash: true},
        {id: Math.random(), text: 'Tomatoes', trash: false}
      ],
    };
  }

addProduct = newProductName =>{
let newProduct = {id: Math.random(), text: newProductName, trash: false};
this.setState({
  products: [...this.state.products, newProduct]
});
alert('You have added the new product:\n'+ newProductName);
}

delProduct = id => {
this.setState({
  products: this.state.products.filter(product => product.id !== id)
});
}

switchToMainScreen = () => {
  this.setState({ screen: 'MainScreen' });
  }

switchToEditTableScreen = () =>{
this.setState({ screen: 'EditTableScreen' });
}


changeTrashHouse = id => {
//все норм, но как-то громоздко?
let swipedProduct = this.state.products.filter(product => product.id === id)[0];

let index = this.state.products.indexOf(swipedProduct);

let changedProduct = {id: swipedProduct.id, text: swipedProduct.text
  , trash: !swipedProduct.trash};

let updatedArrProducts = this.state.products
                              .filter(product => product.id !== id);

updatedArrProducts.splice(index, 0, changedProduct);

this.setState({ products: updatedArrProducts });
}

getCurrentProducts = () =>{
if(!this.state.trash){
return this.state.products;
}
else{
  return this.state.products.filter((product) => product.trash);
}
}

  allProducts = () => {
    if(this.state.trash){//don't render if all products have already selected
      this.setState({
        trash: false
      });
    }
  }

onlyProductsInTrash = () => {
    if(!this.state.trash){//don't render if trash has already selected
      this.setState({
          trash: true
      });
    }
  }

render() {

//это похоже на костыль
    if(this.state.screen==='MainScreen'){
      return (
              <MainScreen
              currentProducts = {this.getCurrentProducts()}
              onlyProductsInTrash = {this.onlyProductsInTrash}
              allProducts = {this.allProducts}
              switchToEditTableScreen = {this.switchToEditTableScreen}
              changeTrashHouse = {this.changeTrashHouse}
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
    height: 70,
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
    fontSize: 24,
    fontWeight: 'bold',
  }
})
