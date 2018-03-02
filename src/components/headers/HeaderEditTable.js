import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import ModalWindow from '../ModalWindow';

export default class HeaderEditTable extends Component {

render(){
  return(
<View style={styles.container}>

<ModalWindow
addProduct = {this.props.addProduct}
/>

<Text style={styles.text}>Groceries</Text>

<TouchableOpacity onPress={this.props.switchToMainScreen}>
    <Text style={styles.text}>Done</Text>
</TouchableOpacity>

</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72
  },
  text:{
    fontSize:16
  }
});
