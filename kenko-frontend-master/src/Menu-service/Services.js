import React from 'react';
import Card from '../Components/Cards/Card';

import './Services.css';
function Services() {
    return ( 
        <div className='main'>
            <div className='service-text'>
                <h2 className='h2-text'>Our Services</h2>
            </div>
            <div className='card-areas'>
                <div className='card'><Card /></div>
                <div className='card'><Card /></div>
                <div className='card'><Card /></div>
            </div>
        </div>
     );
}

export default Services;