import React from 'react';

const Footer = () => {
    const mainLinks = ['О компании', 'Бонусная система', 'Ответы на вопросы', 'Контакты', 'Для партнеров'];
    const categories = ['Пицца', 'Суши', 'Шашлыки', 'Пироги', 'Все категории'];
    return (
        <footer className="page-footer">
            <div className="page-footer__top">
                <div className="container">
                    <div className="page-footer__row">
                        <div className="page-footer__block">
                            <h4 className="page-footer__title">О нас</h4>

                            <ul className="page-footer__list">
                                {mainLinks.map((link, ind) =>
                                    <li key={ind}>
                                        <a href="/">{link}</a>
                                    </li>
                                )}
                            </ul>

                        </div>
                        <div className="page-footer__block">
                            <h4 className="page-footer__title">Категории</h4>
                            <ul className="page-footer__list">
                                {categories.map((link, ind) =>
                                    <li key={ind}>
                                        <a href="/">{link}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="page-footer__block">
                            <h4 className="page-footer__title">Контакты</h4>
                            <dl className="page-footer__contact">
                                <dt>Телефон:</dt>
                                <dd><a href="tel:+74324324343">+7 432 432-43-43</a></dd>
                            </dl>
                            <dl className="page-footer__contact">
                                <dt>Skype:</dt>
                                <dd><a href="skype:tiktak.ru">tiktak.ru</a></dd>
                            </dl>
                            <dl className="page-footer__contact">
                                <dt>Email:</dt>
                                <dd><a href="mailto:info@tiktak.ru">info@tiktak.ru</a></dd>
                            </dl>
                        </div>
                        <div className="page-footer__block page-footer__social-block">
                            <h4 className="page-footer__title">Мы в соц. сетях</h4>
                            <ul className="social page-footer__social">
                                <li className="social__item">
                                    <a href="#">
                                        <img src="/img/vk.png" width="18" height="10" alt="Мы вКонтакте"/>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#">
                                        <img src="/img/fb.png" width="9" height="16" alt="Мы на Facebook"/>
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#">
                                        <img src="/img/insta.png" width="17" height="17" alt="Мы в Instagram"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-footer__bottom">
                <div className="container">
                    <div className="page-footer__row">
                        <p className="page-footer__copy">© Tik Tak, 2015</p>
                        <p className="page-footer__dev">Разработка сайта &nbsp;&mdash; <a href="https://websecret.by/" target="_blank"><img className="page-footer__logo" src="/img/web-secret.svg" alt="Лого студии Web Secret"/></a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
