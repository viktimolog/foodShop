import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class headerMain extends Component {

render(){
  return(
<View style={styles.container}>
    <Image source={require('../../images/settings.jpg')} />

    <Text style={styles.text}>Groceries</Text>

    <Image source={require('../../images/edit.jpg')} />
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
  },
  footer:{
    paddingBottom:0
  },
});
