import React from 'react';
import ProductList from './ProductList';
import Header from './Header';
import Footer from './Footer';
import Shell from './Shell';

import { connect } from 'react-redux';

let CategoryScreen = ({ match, products }) =>
    <Shell>
        <ProductList products={products} match={match} />
    </Shell>

let mapStateToProps = (state, props) => {
    let {match} = props;
    let {categories, products} = state;
    let categoryName = match.params.categoryName;
    let currentCategory = categories.find((obj) => obj.name === categoryName );
    let filteredByCategory = products.filter((obj) => obj.categoryId === currentCategory.id);
    return { products: filteredByCategory, categories: state.categories };
};

let CategoryScreenState = connect(
    mapStateToProps
)(CategoryScreen);
 
export default CategoryScreenState; 








