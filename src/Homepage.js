import React from 'react';
import Header from './Header';
import Shell from './Shell';

let Homepage = () =>
    <Shell>
        <div className="homepage-grid"> 
            <div className="hero">
                <h1> Need More Llama ... No Problama </h1>
                <h1> A Whole lotta Llama ... Without the Drama </h1>
            </div>
            <div className="hgrid-1">
                <img src="http://via.placeholder.com/400x400"/>
            </div>   
        </div>
    </Shell>
export default Homepage;