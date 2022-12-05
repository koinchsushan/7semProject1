import React from 'react';

import './Button.css';
function Button({ children, type, onClick }) {
    return ( 
        <button className='btn' onClick={onClick} type={type}>
            {children}
        </button>
     );
}

export default Button ;