import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import HeaderMain from './src/components/headers/HeaderMain';
import FooterMain from './src/components/footers/FooterMain';
import Product from './src/components/Product';

class foodShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff',

      status:'allProducts',
      currentProducts: null,

      products: [
        {text: 'Milk 1l', status: 'house'},
        {text: 'Eggs Medium 12 pack', status: 'trash'},
        {text: 'Fresh Basil', status: 'house'},
        {text: 'Wholegrain Bread 1 pkg', status: 'trash'},
        {text: 'Ground Coffee 200g', status: 'trash'},
        {text: 'Red Wine', status: 'house'},
        {text: 'Mozzarella Cheese 150g', status: 'house'},
        {text: 'Orange Juice 1l', status: 'trash'},
        {text: 'Tomatoes', status: 'house'}
      ]
    };
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
              <Product product={product} />
          )
      }
      </ScrollView>

      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        // config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
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
    flex: 1
    // height: 90,
    // ...Platform.select({
    //   ios: {paddingTop: 30}
    // })
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
