import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

import './Banner.css'

function Banner() {
    const location = useLocation();
    const navigate = useNavigate();

    function handleClick() {
        navigate('/firstPage', {state: {name: location.state.name}});
    }
    return (
        <div className='container'>
            <div className='banner-text'>
                <div className='b-text'>
                    <h1 className='h1-text'>Predict Your Disease</h1>
                    <h3 className='h3-text'>Identify possible conditions and treatment related to your symptoms.</h3>
                    <p className='para-text'>Tell us a bit about yourself and how you’re feeling for suggested next steps and common treatment plans.</p>
                </div>
            </div>

            <div className='btn-box'>
                    <Button onClick={handleClick}>Check Now</Button>
            </div>

            <div className='banner-image'>
                <div className='b-img'>
                    <img src={require('./kenko-png.png')} />
                </div>
            </div>
        </div>
    );
}

export default Banner;