import React from 'react';
import data from './db';
import Header from './Header';

let ProductScreen = ({match}) => {
    let productId = parseInt(match.params.productId, 10);
    var product = data.products.find(function (obj) { return obj.id === productId; });
    return (
            <div>
            <Header />
            <div className="product-s-wrapper">
                <div className="product-s-gallery">
                     <img className="product-s-img" src={product.img} />  
                </div>
                <div className="product-s-purchase"> 
                    <span className="product-s-name">{product.name} </span>
                    <span className="product-s-price">{product.price} </span>
                    <div className="br"/>
                    <span className="product-s-description">{product.description} </span>
                    <div className="br" />
                    <button className="product-s-button-cart" > Add to Cart </button>
                </div>  
                <div className="product-s-suggestions">
                    <div><img src="http://via.placeholder.com/400x400"/> </div>
                    <div><img src="http://via.placeholder.com/400x400" /> </div>
                    <div><img src="http://via.placeholder.com/400x400" /> </div>
                </div>                
            </div>
            </div>
    )
}

export default ProductScreen;


