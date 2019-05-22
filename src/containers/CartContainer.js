import React from 'react';
import CartItem from '../components/CartItem';
import Checkout from '../components/Checkout';

const CartContainer = (props) => {
    return (
        <section className="cart">
            <div className="container">
                <h1 className="page-title cart__title">Корзина</h1>
                <div className="cart__inner">
                    <div className="cart__left">
                        {
                            props.shops.map((shop) => (
                                <CartItem key={shop.id} shop={shop} totalPrice={props.totalPrice} changeQuantity={props.changeQuantity} removeProduct={props.removeProduct} />
                            ))
                        }
                    </div>
                    <div className="cart__right">
                        <Checkout price={props.totalPrice} shops={props.shops} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartContainer;
