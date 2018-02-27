import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';


export default class product extends Component {
  // constructor() {
  //     super();
  //     this.state = {
  //       text:'',
  //       status:''
  //     };
  // }

render(){
  const {
    product
} = this.props;

if(product.status==='house'){
return(
  <View style={styles.containerHouse}>
  <Text style={styles.text}>{product.text}</Text>
    <Image source={require('../images/house.jpg')} />
  </View>
);
      }
      else{
        return(
          <View style={styles.containerTrash}>
            <Image source={require('../images/trash.jpg')} />
            <Text style={styles.text}>{product.text}</Text>
          </View>
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
