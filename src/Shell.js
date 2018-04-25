import React from 'react';
import Header from './Header';
import Footer from './Footer';

let Shell = ({children }) =>
    <div className="Site">
        <div className="Site-content">
            <Header />
            {children}
        </div>
        <Footer/>
    </div>

export default Shell;