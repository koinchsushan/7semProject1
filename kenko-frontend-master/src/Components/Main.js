import React from 'react';
import Services from '../Menu-service/Services';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Testimonial from './Testimonials/Testimonial';

function Main(){
    return(
        <>
            <Header/>
            <Banner />
            <Services />
            <Testimonial />
            <Footer/>
        </>
    )
}

export default Main;