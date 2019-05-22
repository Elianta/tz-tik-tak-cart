import React from 'react';

class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            price: +this.props.data.price,
        };
        this.productID = this.props.data.id;
        this.shopID = this.props.shopID;
    }

    componentDidMount() {
        this.setState({
            quantity: +this.props.data.quantity || 1
        });
    }


    handleRemoveClick = () => {
        this.props.removeProduct(this.shopID, this.productID);
    }

    handleDecreaseClick = () => {
        if(this.state.quantity > 1) {
            this.setState((prevState) => ({
                quantity: prevState.quantity - 1
            }));
            this.props.changeQuantity(this.shopID, this.productID, -1);
        }
    }

    handleIncreaseClick = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity + 1
        }));
        this.props.changeQuantity(this.shopID, this.productID, +1);
    }

    render() {
        const { title, weight, special } = this.props.data;
        const { quantity, price } = this.state;
        const totalPrice = quantity * price;
        return (
            <li className={special ? 'cart-product cart-product--special' : 'cart-product'}>
                <div className="cart-product__content">
                    <h3 className="cart-product__title">
                        <a href="#">{title}</a>
                    </h3>
                    <p>{weight}</p>
                </div>
                <div className="cart-product__controls">
                    {
                        !special && (
                            <div className="btn cart-product__quantity">
                                <button className="btn btn--minus" onClick={this.handleDecreaseClick}></button>
                                <input type="number" value={quantity} readOnly/>
                                <button className="btn btn--plus" onClick={this.handleIncreaseClick}></button>
                            </div>
                        )
                    }

                    <div className="cart-product__price">{totalPrice} руб.</div>

                    {
                        !special && (
                            <button className="btn btn--del cart-product__del" onClick={this.handleRemoveClick}></button>
                        )
                    }

                </div>
            </li>
        );
    }

}

export default CartProduct;
