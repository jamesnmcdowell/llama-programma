import React from 'react';

let CheckoutBar = ({total}) =>
    <div className="checkout-bar">
        <p> Checkout Summary </p>
        <div className="br"/>
        <div className="flex-between"> 
            <p> Subtotal </p>
            <p> ${(total.sum).toFixed(2)} </p>
        </div>
        <div className="flex-between">
            <p> Shipping </p>
            <p>{total.shipping > 0 ? "$" + (total.shipping).toFixed(2) : "Free"} </p>
        </div>
        <div className="flex-between">
            <p> Sales Tax </p>
            <p> ${(total.tax).toFixed(2)} </p>
        </div>
        <div className="br" />
        <div className="flex-between">
            <p> Estimated Total </p>
            <p> ${(total.sum + total.shipping + total.tax).toFixed(2) } </p>
        </div>
        <div className="br" />
        <button> Checkout </button>
    </div>
export default CheckoutBar;