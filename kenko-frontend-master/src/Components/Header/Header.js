import React from 'react';

import './Header.css';
import AccountLogin from '../AccountLogin/AccountLogin';
import Banner from '../Banner/Banner';
function Header() {
    return ( 
        <div>
            <div className="bar">
                <div className="logo">
                    <text className="logo-text">kenko</text>
                </div>
                <div className="diseaselabel">Disease Prediction System</div>
                
                <div className='AccountLogin'><AccountLogin/></div>
            </div>
        </div>
     );
}

export default Header;