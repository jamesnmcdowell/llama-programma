import React from 'react';
import CartItem from './CartItem';

let CartList = ({cart}) =>
    <div className="cart-list">
        <h1> My Shopping Cart </h1>
        <div className="br" />
        <p> Products </p>
        <div className="br" />
        {cart.map(product =>
            <CartItem product={product} />
        )}
    </div>
export default CartList;