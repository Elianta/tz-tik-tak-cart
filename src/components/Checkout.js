import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delivery: 'courier',
            name: '',
            tel: '',
            payment: 'cash',
            deliveryCost: 0,
            deliveryString: '',
            isDeliveryFree: false
        };
    }

    componentDidMount() {
        this._updateDeliveryData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.price !== prevProps.price) {
            this._updateDeliveryData();
        if (this.state.isDeliveryFree !== prevState.isDeliveryFree) {
            this._updateDeliveryData();
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        alert(`Cart: ${JSON.stringify(this.props.shops)}; Form: ${JSON.stringify(this.state)}`);
    }

    onChange = (e) => {
        let target = e.target;
        const value = target.value;
        const name = target.tagName === 'OPTION' ? target.parentNode.name : target.name;
        if(name === 'delivery') {
            this._checkIfDeliveryIsFree(value);
        }
        this.setState({
            [name]: value
        });

    }

    _checkIfDeliveryIsFree(value) {
        const isDeliveryFree = (value === 'pickup');
        this.setState({
            isDeliveryFree
        });

    }
    _updateDeliveryData() {
        const isDeliveryFree = this.state.isDeliveryFree;
        let deliveryCost = this.props.shops.reduce((acc, shop) => {
            let cost = (shop.productsPrice >= shop.info.sumMinFreeDelivery || isDeliveryFree) ? 0 : shop.info.deliveryCost;
            return acc + cost;
        }, 0);
        let deliveryString = deliveryCost > 0 ? `${deliveryCost} руб.` : 'Бесплатно';
        this.setState({
            deliveryCost,
            deliveryString
        });
    }

    render() {
        return (
            <form className="checkout cart__checkout" onSubmit={this.onSubmit}>
                <h2 className="page-title-medium checkout__title">Оформление заказа</h2>

                <div className="checkout__radio-row">
                    <input className="input-radio" type="radio" name="delivery" value="courier" id="checkout-courier" checked={this.state.delivery === 'courier'} onChange={this.onChange}/>
                    <label htmlFor="checkout-courier" className="checkout__radio">Доставка</label>
                    <input className="input-radio" type="radio" name="delivery" value="pickup" id="checkout-pickup" checked={this.state.delivery === 'pickup'} onChange={this.onChange}/>
                    <label htmlFor="checkout-pickup" className="checkout__radio">Самовывоз</label>
                </div>

                <div className="checkout__block">
                    <input className="input input--light checkout__input" type="text" name="name" value={this.state.name} placeholder="Имя" required onChange={this.onChange} />
                    <input className="input input--light checkout__input" type="tel" name="tel" value={this.state.tel} placeholder="Телефон" required onChange={this.onChange} />
                </div>

                <div className="checkout__block">
                    <label className="label" htmlFor="checkout-payment">Оплата:</label>
                    <select className="input input--light checkout__input" name="payment" id="checkout-payment" value={this.state.value} onChange={this.onChange}>
                        <option value="cash">Наличными</option>
                        <option value="card">Картой</option>
                    </select>

                </div>

                <div className="checkout__footer">
                    <p>Сумма заказа: {this.props.price} руб.</p>
                    <p>Доставка: {this.state.deliveryString}</p>
                    <strong className="checkout__total">Итого: {this.props.price + this.state.deliveryCost}руб.</strong>
                </div>


                <button type="submit" className="btn btn--decor btn--full">Заказать</button>
            </form>
        );
    }

}

export default Checkout;
