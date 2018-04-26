import React from 'react';


let CartItem = ({product}) => 
    <div className="cart-item"> 
        <div className="cart-img">
            <img src={product.img}/>
        </div>
        <div className="cart-info">
            <p className="cart-name">{product.name}</p>
            <p>QTY: {product.quantity}</p>
            <p>Remove</p>
        </div>
        <div className="cart-price">
            <p>{product.price}</p>
        </div>
        <div className="cart-total">
            <p>{ product.price * product.quantity }</p>
        </div>
    </div>
export default CartItem;