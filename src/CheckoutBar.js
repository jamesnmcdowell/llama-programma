import React from 'react';

let CheckoutBar = () =>
    <div className="checkout-bar">
        <p> Checkout Summary </p>
        <div className="br"/>
        <div className="flex-between"> 
            <p> Subtotal </p>
            <p> $400 </p>
        </div>
        <div className="flex-between">
            <p> Shipping </p>
            <p> $10 </p>
        </div>
        <div className="flex-between">
            <p> Sales Tax </p>
            <p> $20 </p>
        </div>
        <div className="br" />
        <div className="flex-between">
            <p> Estimated Total </p>
            <p> $430 </p>
        </div>
        <div className="br" />
        <button> Checkout </button>
    </div>
export default CheckoutBar;