import React from 'react';

import './Testimonial.css';
function Testimonial() {
    return ( 
        <div className='testi-container'>
            <div className='testi-text'>
                <h2 className='h2-text'>Testimonials</h2>
            </div>
            <div className='sections'>
                <div className='sec-1'>
                    <div className='circ'>
                        {/* <img src={require('https://unsplash.com/photos/rDEOVtE7vOs')} width='220px' height='220px'></img> */}
                    </div>
                    <div className='squ'>
                        <h1> John Smith</h1>
                        <p className='para'>Far far away, behind the word mountains, far from the countries
                         Vokalia and Consonantia, there live the blind texts. Separated they live in 
                         Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                         A small river named Duden flows by their place and supplies it with the necessary 
                         regelialia. It is a paradisematic country, in which roasted parts </p>
                    </div>
                </div>
                <div className='sec-1'>
                    <div className='circ'></div>
                    <div className='squ'>
                        <h1> John Smith</h1>
                            <p className='para'>Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. Separated they live in 
                            Bookmarksgrove right at the coast of the Semantics, a large language ocean. 
                            A small river named Duden flows by their place and supplies it with the necessary 
                            regelialia. It is a paradisematic country, in which roasted parts </p>
                        </div>
                    </div>
                </div>
        </div>
     );
}

export default Testimonial;