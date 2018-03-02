import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
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
      if(!this.props.product.trash){
        this.props.changeTrashHouse(this.props.product.id);
      }
      break;

      case SWIPE_RIGHT:
      if(this.props.product.trash){
        this.props.changeTrashHouse(this.props.product.id);
      }
      break;
    }
  }

render(){
  const {
    product
} = this.props;

if(!this.props.product.trash){
return(

  <GestureRecognizer
    onSwipe={(direction, state) => this.onSwipe(direction, state)}
    >
    <View style={styles.containerHouse}>
    <Text style={styles.text}>{product.text}</Text>
      <Image source={require('../images/house.jpg')}
      style={{width: 72, height: 72}}/>
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
            <Image source={require('../images/trash.jpg')}
            style={{width: 72, height: 72}} />
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
    height: 72,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  },
  containerHouse: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  },
  text:{
    fontSize:16,
    paddingLeft: 30
  },
});
