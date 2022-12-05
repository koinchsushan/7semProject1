import React from 'react';
import Button from '../Button/Button';

import './Card.css';
function Card() {
    return ( 
            <div className='square'>
                <div className='circle'></div>
                <div className='square-text'>
                    <text>Tell us a bit about yourself and how you’re feeling for suggested next stetexts and 
                        common treatment plans.
                    </text>
                <div className='square-btn'>    
                    <Button>Check Now</Button>
                </div>
                </div>
            </div>
     );
}

export default Card;