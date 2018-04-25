import React from 'react';
import CartList from './CartList';
import CheckoutBar from './CheckoutBar';
import Shell from './Shell';

let Cart = () =>
    <Shell>
        <div className="cart-screen">
            <CartList/>
            <CheckoutBar />
        </div>
    </Shell>
export default Cart;