import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Product extends Component {
  constructor() {
      super();
      this.state = {

        gestureName: 'none',

      };
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {

      case SWIPE_LEFT:
        if(this.props.product.status!=='trash'){
          this.props.changeProductStatusToTrash(this.props.product.id);
        }
        break;

      case SWIPE_RIGHT:
      if(this.props.product.status!=='house'){
        this.props.changeProductStatusToHouse(this.props.product.id);
      }
        break;
    }
  }

render(){
  const {
    product
} = this.props;

if(product.status==='house'){
return(

  <GestureRecognizer
    onSwipe={(direction, state) => this.onSwipe(direction, state)}
    >
    <View style={styles.containerHouse}>
    <Text style={styles.text}>{product.text}</Text>
      <Image source={require('../images/house.jpg')} />
    </View>
  </GestureRecognizer>
);
      }
      else{
        return(
          <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            >
          <View style={styles.containerTrash}>
            <Image source={require('../images/trash.jpg')} />
            <Text style={styles.text}>{product.text}</Text>
          </View>
          </GestureRecognizer>
        );
      }
    }
}

const styles = StyleSheet.create({
  containerTrash: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 90
  },
  containerHouse: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 90
  },
  text:{
    fontSize:20,
    paddingLeft: 30
  },
});
