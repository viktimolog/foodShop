import React, {Component} from 'react';
import {
    View,
    Platform,
    BackHandler
} from 'react-native';

import MainScreen from './src/components/screens/MainScreen';
import EditTableScreen from './src/components/screens/EditTableScreen';
import FooterMain from './src/components/footers/FooterMain';
import styles from './src/Styles';

export default class FoodShop extends Component {

    constructor(props) {
        super(props);
        this.backButtonListener = null;

        this.state = {
            trash: false,
            screen: 'MainScreen',

            products: [
                {id: Math.floor(Date.now() / 1000), text: 'Milk 1l', trash: false},
                {id: Math.floor(Date.now() / 1000) + 1, text: 'Eggs Medium 12 pack', trash: true},
                {id: Math.floor(Date.now() / 1000) + 2, text: 'Fresh Basil', trash: false},
                {id: Math.floor(Date.now() / 1000) + 3, text: 'Wholegrain Bread 1 pkg', trash: true},
                {id: Math.floor(Date.now() / 1000) + 4, text: 'Ground Coffee 200g', trash: true},
                {id: Math.floor(Date.now() / 1000) + 5, text: 'Red Wine', trash: false},
                {id: Math.floor(Date.now() / 1000) + 6, text: 'Mozzarella Cheese 150g', trash: false},
                {id: Math.floor(Date.now() / 1000) + 7, text: 'Orange Juice 1l', trash: true},
                {id: Math.floor(Date.now() / 1000) + 8, text: 'Tomatoes', trash: false}
            ],
        };
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            this.backButtonListener = BackHandler.addEventListener('hardwareBackPress', () => {
                if (this.state.screen !== 'MainScreen') {
                    this.switchToMainScreen();
                    return true;
                }
                return false;
            });
        }
    }

    componentWillUnmount() {
        this.backButtonListener.remove();
    }

    addProduct = newProductName => {
        const newProduct = {id: Math.floor(Date.now() / 1000), text: newProductName, trash: false};

        this.setState({
            products: [newProduct, ...this.state.products]
        });
    }

    delProduct = id => {
        this.setState({
            products: this.state.products.filter(product => product.id !== id)
        });
    }

    switchToMainScreen = () => {
        this.setState({screen: 'MainScreen'});
    }

    switchToEditTableScreen = () => {
        this.setState({screen: 'EditTableScreen'});
    }


    changeTrashHouse = id => {
        const swipedProduct = this.state.products.filter(product => product.id === id)[0];

        const index = this.state.products.indexOf(swipedProduct);

        const changedProduct = {
            id: swipedProduct.id,
            text: swipedProduct.text,
            trash: !swipedProduct.trash
        };

        let updatedArrProducts = this.state.products.filter(product => product.id !== id);

        updatedArrProducts.splice(index, 0, changedProduct);

        this.setState({products: updatedArrProducts});
    }

    getCurrentProducts = () => {
        if (!this.state.trash) {
            return this.state.products;
        }
        else {
            return this.state.products.filter((product) => product.trash);
        }
    }

    setAllProductsOrOnlyInTrash = () => {
        this.setState({
            trash: !this.state.trash
        });
    }

    getScreen = () => {
        if (this.state.screen === 'MainScreen') {
            return (
                <MainScreen
                    currentProducts={this.getCurrentProducts()}
                    setAllProductsOrOnlyInTrash={this.setAllProductsOrOnlyInTrash}
                    switchToEditTableScreen={this.switchToEditTableScreen}
                    changeTrashHouse={this.changeTrashHouse}
                    trash={this.state.trash}/>);
        }
        else if (this.state.screen === 'EditTableScreen') {
            return (
                <EditTableScreen
                    products={this.getCurrentProducts()}
                    setAllProductsOrOnlyInTrash={this.setAllProductsOrOnlyInTrash}
                    switchToMainScreen={this.switchToMainScreen}
                    delProduct={this.delProduct}
                    addProduct={this.addProduct}
                    trash={this.state.trash}/>);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getScreen()}
                <FooterMain
                    setAllProductsOrOnlyInTrash={this.setAllProductsOrOnlyInTrash}
                    trash={this.state.trash}/>
            </View>);
    }
}
