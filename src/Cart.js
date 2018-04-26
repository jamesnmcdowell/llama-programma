import React from 'react';
import CartList from './CartList';
import CheckoutBar from './CheckoutBar';
import Shell from './Shell';
import { connect } from 'react-redux';

let Cart = ({cart, total}) =>
    <Shell>
        <div className="cart-screen">
            <CartList cart={cart}/>
            <CheckoutBar total={total} />
        </div>
    </Shell>

let mapStateToProps = (state) => {
    let { categories, products, cart } = state;
    let sum = cart.reduce((total, product) => total + (product.price * product.quantity ), 0);
    let shipping = sum >= 100 ? 0 : 10;
    let tax = (sum * 0.08);
    return { cart: cart, total: {sum: sum, shipping: shipping, tax: tax} };
};

let CartState = connect(
    mapStateToProps
)(Cart);

export default CartState; 


