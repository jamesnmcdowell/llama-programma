import React from 'react';
import llama from './llama.svg';
import CartBadge from './CartBadge';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const logo = 'https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-64-256.png';

let Header = ({cart}) =>
    <div className="nav-bar">
        <div className="menu-links">
            <Link to="/categories/clothes">Clothes</Link>
            <Link to="/categories/kitchen">Kitchen</Link>
            <Link to="/categories/decor">Decor</Link>
        </div>
        <Link className="logo" to="/"> <img className="logo" src={llama} /> </Link>
        <div className="action-links">
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart[<CartBadge/>]</Link>
        </div>
    </div>
    
let mapStateToProps = (state, props) => {
    return { cart: state.cart };
};

let HeaderState = connect(
    mapStateToProps
)(Header);

export default HeaderState;

