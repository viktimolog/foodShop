import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class FooterMain extends Component {

render(){
  return(
<View style={styles.container}>

<TouchableOpacity onPress={this.props.allProducts}>
    <Image source={require('../../images/allList.jpg')} />
</TouchableOpacity>

<TouchableOpacity onPress={this.props.onlyProductsInTrash}>
    <Image source={require('../../images/onlyTrash.jpg')} />
</TouchableOpacity>

</View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 60,
    paddingRight: 60,
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
