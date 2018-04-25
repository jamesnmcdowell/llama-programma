import React from 'react';
import llama from './llama.svg';
import { Link } from 'react-router-dom';
const logo = 'https://cdn2.iconfinder.com/data/icons/miscellaneous-12/24/miscellaneous-64-256.png';

let Header = () =>
    <div className="nav-bar">
        <div className="menu-links">
            <Link to="/categories/clothes">Clothes</Link>
            <Link to="/categories/kitchen">Kitchen</Link>
            <Link to="/categories/decor">Decor</Link>
        </div>
        <Link className="logo" to="/"> <img className="logo" src={llama} /> </Link>
        <div className="action-links">
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
        </div>

    </div>
    

export default Header;

