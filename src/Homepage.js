import React from 'react';
import Header from './Header';
import Shell from './Shell';
import llama from './llama1.jpg';
import llama2 from './llama2.jpg'

let Homepage = () =>
    <Shell>
        <div className="homepage-grid"> 
            <div className="hero">
                <h1> Need More Llama ... No Problama </h1>
            </div>
            <div className="hgrid-2">
                <img src={llama} />
            </div>   
            <div className="hgrid-1">
                <img src={llama2}/>
            </div>   
            <div className="hero">
                <h1> Explore Endless Llama possibilities</h1>
            </div>
        </div>
    </Shell>
export default Homepage;