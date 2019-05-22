import React from 'react';
import Shop from '../components/Shop';
import CartProducts from '../components/CartProducts';

const CartItem = (props) => {
    let sumMin = props.shop.info.sumMin;
    let productsPrice = props.shop.productsPrice;
    let priceDiff = sumMin - productsPrice;
    return (
        <React.Fragment>
            <Shop info={props.shop.info} />
            {priceDiff > 0 &&
                <div className="warning cart__warning">
                    Минимальная сумма заказа {sumMin} руб. Выберите блюда еще на {priceDiff} руб.
                    <a href="#" className="btn btn--narrow btn--green warning__btn">В меню ресторана</a>
                </div>
            }
            <CartProducts shopID={props.shop.id} products={props.shop.products} totalPrice={props.totalPrice} changeQuantity={props.changeQuantity} removeProduct={props.removeProduct} />
        </React.Fragment>
    );
};

export default CartItem;
