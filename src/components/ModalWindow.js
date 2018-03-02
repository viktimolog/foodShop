import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TouchableHighlight, View, TextInput} from 'react-native';

export default class ModalWindow extends Component {
  state = {
    modalVisible: false,
    newProductName:''
  };

  addNewProductHandler = () => {
    if (this.state.newProductName.trim() === '') {
      return;
    }

    if (this.state.newProductName.length>27){
    this.props.addProduct(this.state.newProductName.substr(0,26));
    }
    else{
      this.props.addProduct(this.state.newProductName);
    }

    this.setState({
      newProductName:''
    });
  };

  newProductNameHandler = val => {
    this.setState({
      newProductName: val
    });
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false);}}>
          <View>

            <View style={styles.container}>

            <TouchableHighlight onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
            <Text style={styles.text}>Cancel</Text>
            </TouchableHighlight>

            <Text style={styles.text}>Add new list item</Text>

            <TouchableHighlight onPress={this.addNewProductHandler}>
              <Text style={styles.text}>Done</Text>
            </TouchableHighlight>

            </View>

            <View style={styles.containerText}>
            <Text style={styles.textCenter}>Add new list item</Text>
            </View>

            <View style={styles.containerInput}>

            <TextInput
            style={styles.text}
            autoFocus = {true}
            onChangeText={this.newProductNameHandler}
            value={this.state.newProductName}
            >
            </TextInput>

            <Text style={styles.textRight}>Characters left 27</Text>
            </View>

          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {this.setModalVisible(true);}}>
          <Text style={styles.textPlus}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerInput: {
    paddingLeft: '8%',
    width: '92%',
    paddingTop: 40
  },
  containerText: {
    paddingTop: 50
  },
  textCenter:{
    fontSize: 16,
    textAlign: 'center'
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 72,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  },
  text:{
    fontSize:16
  },
  textPlus:{
    fontSize:28
  },
  textRight:{
    fontSize: 16,
    textAlign: 'right'
  }
});
