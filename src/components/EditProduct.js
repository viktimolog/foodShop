import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class EditProduct extends Component {

handleDelete = () => {
this.props.delProduct(this.props.product.id);
}

render(){
return(

<View style={styles.container}>

<TouchableOpacity onPress={this.handleDelete}>
<Image source={require('../images/minus.jpg')} />
</TouchableOpacity>

<Text style={styles.text}>{this.props.product.text}</Text>
</View>
);
}
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
    height: 90
  },
  text:{
    fontSize:20
  }
});
