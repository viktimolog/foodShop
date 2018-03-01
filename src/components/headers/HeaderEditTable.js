import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class headerEditTable extends Component {

render(){
  return(
<View style={styles.container}>

<TouchableOpacity onPress={this.props.addProduct}>
    <Text style={styles.text}>+</Text>
</TouchableOpacity>

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
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 90
  },
  text:{
    fontSize:20
  }
});