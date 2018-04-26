import React from 'react';
import { Link } from 'react-router-dom';

let RelatedProducts = ({relatedProducts}) =>
    <div className="product-s-suggestions">
       { relatedProducts.map( (product) =>
            <Link to={`/products/${product.id}`}><div><img src={product.img} /> </div></Link> )}
    </div>    
export default RelatedProducts;