import React from 'react';

const CartWidget = (props) => {
    const { amount, price } = props;
    return (
        <div className="cart-widget page-header__cart">
            <div className="cart-widget__icon">
                <img src="/img/cart.png" alt="Корзина"/>
            </div>
            <div className="cart-widget__content">
                <h3 className="page-title-medium cart-widget__title">Корзина
                    <span className="cart-widget__amount">{amount}</span>
                </h3>
                <div className="cart-widget__price">{price} руб.</div>
            </div>
        </div>
    );
};

export default CartWidget;
