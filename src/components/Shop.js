import React from 'react';

const Shop = (props) => {
    const { title, imgSmall, sumMin = 0, deliveryCost = 0, sumMinFreeDelivery = 0 } = props.info;
    return (
        <div className="shop">
            <div className="shop__img">
                <img src={imgSmall} alt={title} />
            </div>
            <div className="shop__content">
                <h3 className="page-title-medium shop__name">
                    <a href="#">{title}</a>
                </h3>
                <div className="shop__desc">
                    <p>Мин. сумма заказа: {sumMin} руб.</p>
                    <p>Доставка: {deliveryCost} руб.</p>
                    <p>Бесплатная доставка: от {sumMinFreeDelivery} руб.</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
