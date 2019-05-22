import React from 'react';
import CartProduct from './CartProduct';

class CartProducts extends React.Component {
    constructor(props) {
        super(props);
        this.updatePrice = this.updatePrice.bind(this);
    }

    updatePrice(price) {
        this.setState((prevState) => ({
            totalPrice: prevState.totalPrice + price
        }));
    }

    render() {
        const { products, totalPrice, shopID } = this.props;
        return (
            <React.Fragment>
                <ul className="cart__list">
                    {
                        products.map((item) => (
                            <CartProduct key={item.id} data={item} shopID={shopID} changeQuantity={this.props.changeQuantity} removeProduct={this.props.removeProduct}/>
                        ))
                    }
                </ul>
                <p className="cart__footer">Сумма заказа: {totalPrice} руб.</p>
            </React.Fragment>
        );
    }

}

export default CartProducts;
