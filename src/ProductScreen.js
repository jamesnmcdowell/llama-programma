import React from 'react';
import Header from './Header';
import Shell from './Shell';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import RelatedProducts from './RelatedProducts';

let ProductScreen = ({ match, product, relatedProducts, dispatch}) => 
    <Shell>
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
                <button onClick={() => dispatch({type: "ADD_TO_CART", payload:product})} className="product-s-button-cart" > Add to Cart </button>
            </div>  
            <RelatedProducts relatedProducts={relatedProducts} />            
        </div>
    </Shell>
   

let mapStateToProps = (state, props) => {
    let { match } = props;
    let { categories, products } = state;
    let productId = parseInt(match.params.productId, 10);
    let product = products.find( (obj) => obj.id === productId );
    let relatedProducts = products.filter((obj) => obj.categoryId === product.categoryId && obj.id !== product.id  ).slice(0,3);
    return { product: product, relatedProducts: relatedProducts };
};

let mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch};
};

// let mapDispatchToProps = dispatch =>
//     bindActionCreators({
//         addToCart
//     }, dispatch);

let ProductScreenState = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductScreen);

export default ProductScreenState;






