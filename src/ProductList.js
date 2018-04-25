import React from 'react';
import ProductItem from './ProductItem';

let ProductList = ({ products }) =>
    <div className="product-list">
        {products.map(item =>
            <ProductItem item={item}/>
        )}
    </div>

export default ProductList;
