import React, {Component} from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput
} from 'react-native';

export default class ModalWindow extends Component {

    state = {
        modalVisible: false,
        newProductName: '',
        maxLength: 27
    };

    addNewProductHandler = () => {
        if (this.state.newProductName.trim() !== '') {

            this.props.addProduct(this.state.newProductName);

            this.setModalVisible(!this.state.modalVisible);
        }
    }

    newProductNameHandler = val => {
        if (val.length <= this.state.maxLength) {
            this.setState({
                newProductName: val,
            });
        }
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
            newProductName: ''
        });
    }

    render() {
        const charactersLeft = `Characters left ${this.state.maxLength - this.state.newProductName.length}`;

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}>
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
                                autoFocus={true}
                                onChangeText={this.newProductNameHandler}
                                value={this.state.newProductName}>
                            </TextInput>
                            <Text style={styles.textRight}>
                                {charactersLeft}
                            </Text>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text style={styles.textPlus}>+</Text>
                </TouchableHighlight>
            </View>);
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
    textCenter: {
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
    text: {
        fontSize: 16
    },
    textPlus: {
        fontSize: 28
    },
    textRight: {
        fontSize: 16,
        textAlign: 'right'
    }
});
