import React from 'react';
import CartWidget from './CartWidget';

const Header = (props) => {
    const { totalPrice, productAmount } = props;
    return (
        <header className="page-header">
            <div className="container page-header__inner">
                <a href="/" className="page-header__logo">
                    <img src="/img/logo.svg" alt="Тик-Так лого"/>
                </a>
                <div className="page-header__search">
                    <form action="" className="search">
                        <input className="input search__input" type="text" name="search" id="search" placeholder="Поиск"/>
                        <button className="search__btn" type="submit">
                            <img src="/img/search.png" alt="Поиск"/>
                        </button>
                    </form>
                </div>
                <CartWidget price={totalPrice} amount={productAmount} />
            </div>
        </header>
    );
};

export default Header;
