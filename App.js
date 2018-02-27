import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView
} from 'react-native';

import HeaderMain from './src/components/headers/HeaderMain';
import FooterMain from './src/components/footers/FooterMain';
import Product from './src/components/Product';

class foodShop extends Component {

  constructor(props) {
    super(props);
    this.state = {

      status:'allProducts',
      currentProducts: null,

      products: [
        {id: 0, text: 'Milk 1l', status: 'house'},
        {id: 1, text: 'Eggs Medium 12 pack', status: 'trash'},
        {id: 2, text: 'Fresh Basil', status: 'house'},
        {id: 3, text: 'Wholegrain Bread 1 pkg', status: 'trash'},
        {id: 4, text: 'Ground Coffee 200g', status: 'trash'},
        {id: 5, text: 'Red Wine', status: 'house'},
        {id: 6, text: 'Mozzarella Cheese 150g', status: 'house'},
        {id: 7, text: 'Orange Juice 1l', status: 'trash'},
        {id: 8, text: 'Tomatoes', status: 'house'}
      ]

      // products: [
      //   {id: Date.now(), text: 'Milk 1l', status: 'house'},
      //   {id: Date.now(), text: 'Eggs Medium 12 pack', status: 'trash'},
      //   {id: Date.now(), text: 'Fresh Basil', status: 'house'},
      //   {id: Date.now(), text: 'Wholegrain Bread 1 pkg', status: 'trash'},
      //   {id: Date.now(), text: 'Ground Coffee 200g', status: 'trash'},
      //   {id: Date.now(), text: 'Red Wine', status: 'house'},
      //   {id: Date.now(), text: 'Mozzarella Cheese 150g', status: 'house'},
      //   {id: Date.now(), text: 'Orange Juice 1l', status: 'trash'},
      //   {id: Date.now(), text: 'Tomatoes', status: 'house'}
      // ]
    };
  }

changeProductStatusToTrash = id => {
let tempArr = this.state.products;
for (let i = 0; i < tempArr.length; i++) {
if(tempArr[i].id === id){
tempArr[i].status='trash';
}
this.setState({ products: tempArr });
      }
}

changeProductStatusToHouse = id => {
let tempArr = this.state.products;
for (let i = 0; i < tempArr.length; i++) {
if(tempArr[i].id === id){
tempArr[i].status='house';
break;
}
this.setState({ products: tempArr });
      }
}

  allProducts = () =>{
    if(this.state.status!=='allProducts'){
      this.setState({
        status:'allProducts',
        currentProducts: this.state.products
      });
    }
  }

  onlyProductsInTrash = () =>{
    if(this.state.status!=='ProductsInTrash'){
      this.setState({
          status:'ProductsInTrash',
          currentProducts: this.state.products.filter((product) =>
        product.status==='trash')
      });
    }
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }

  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    if(this.state.currentProducts===null){
      this.state.currentProducts = this.state.products;
    }

    return (
      <View style={styles.container}>
      <HeaderMain />
      <ScrollView>
      {
          this.state.currentProducts.map(product =>
              <Product
              product={product}
              changeProductStatusToTrash = {this.changeProductStatusToTrash}
              changeProductStatusToHouse = {this.changeProductStatusToHouse}
              />
          )
      }
      </ScrollView>

      <View>
      <FooterMain
      onlyProductsInTrash = {this.onlyProductsInTrash}
      allProducts = {this.allProducts}
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

export default foodShop;
// export default HeaderMain;
