import React from 'react';

let RelatedProducts = ({relatedProducts}) =>
    <div className="product-s-suggestions">
       { relatedProducts.map( (product) =>
        <div><img src={product.img} /> </div> )}
    </div>    

export default RelatedProducts;