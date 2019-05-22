import React from 'react';
import './styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import {Router} from '@reach/router';

class app extends React.Component {
    state = {
        shops: [
            {
                id: '0',
                info: {
                    title: 'Pizza Sushi Wok',
                    imgSmall: '/img/shops/shop_0.png',
                    sumMin: 800,
                    deliveryCost: 200,
                    sumMinFreeDelivery: 2000
                },
                products: [
                    {
                        id: '1',
                        title: 'Свинина с овощами Те Бань-Шао с лапшой',
                        price: 400,
                        weight: '120г.',
                        quantity: 10,
                    },
                    {
                        id: '2',
                        title: 'Кола',
                        price: 150,
                        weight: '0.5л',
                        quantity: 2,
                    },
                    {
                        id: '3',
                        title: 'Коробка',
                        price: 20,
                        weight: '20г',
                        special: true
                    }
                ],
                productsPrice: 4320
            }
        ],
        totalPrice: 4320,
        productAmount: 12
    }

    changeQuantity = (shopID, productID, value) => {
        let totalPrice = this.state.totalPrice;
        let productAmount = this.state.productAmount;
        let newShops = this.state.shops.map((shop) => {
            if (shop.id === shopID) {
                let productsPrice = shop.productsPrice;
                let newProducts = shop.products.map((product) => {
                    if (product.id === productID) {
                        let newQuantity = product.quantity + value;
                        totalPrice += value * product.price;
                        productsPrice += value * product.price;
                        productAmount += value;
                        return {...product, quantity: newQuantity};
                    }
                    return product;
                });
                return {...shop, products: newProducts, productsPrice};
            }
            return shop;
        });
        this.setState({
            shops: newShops,
            totalPrice,
            productAmount
        });
    };

    removeProduct = (shopID, productID) => {
        let totalPrice = this.state.totalPrice;
        let productAmount = this.state.productAmount;

        let newShops = this.state.shops.map((shop) => {
            let specialProducts = 0;
            if (shop.id === shopID) {
                let productsPrice = shop.productsPrice;
                let newProducts = shop.products.filter((product) => {
                    if (product.id === productID) {
                        totalPrice -= product.quantity * product.price;
                        productsPrice -= product.quantity * product.price;
                        productAmount -= product.quantity;
                        return false;
                    }
                    if(product.special) {
                        specialProducts++;
                    }
                    return product;
                });
                // check if only special products are present
                if(newProducts.length === specialProducts) {
                    newProducts.forEach((product) => {
                        totalPrice -= product.price;
                    });
                    shop.productsPrice = 0;
                    newProducts = [];
                }
                return {...shop, products: newProducts, productsPrice};
            }

            return shop;
        });

        this.setState({
            shops: newShops,
            totalPrice,
            productAmount
        });
    }

    render() {
        const { shops, productAmount, totalPrice } = this.state;
        return (
            <React.Fragment>
                <Header totalPrice={totalPrice} productAmount={productAmount} />
                <main className="page-content">
                    <Router>
                        <CartContainer shops={shops} totalPrice={totalPrice} changeQuantity={this.changeQuantity} removeProduct={this.removeProduct} path="/" />
                    </Router>
                </main>
                <Footer />

            </React.Fragment>
        );
    }
}


export default app;
