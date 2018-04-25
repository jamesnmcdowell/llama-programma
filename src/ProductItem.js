import React from 'react';
import { Link } from 'react-router-dom';

let ProductItem = ({ item, match }) =>
    <div className="product-item">
        <Link to={`/products/${item.id}`}> <img className="product-img" src={item.img} /> </Link>
        <p className="product-name">{item.name}</p>
        <p className="product-price">{item.price}</p>
    </div>

export default ProductItem;