import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-nav'>
              <div>
                  <h5>About Us</h5>
                  <p>We want to help you predict the disease on the basis of the symptoms that 
                      you have been encountering on your body.  </p>
               </div>

               <div className='contactus'>
                   <h5>Contact Us</h5>
                   <ul>
                       <li id='phcontact'>
                           +977 9861030743</li>
                       <li id='mailcontact'>predictdisease@gmail.com</li>
                   </ul>
                   </div>
             </div>

             <div className='footer-info'>
                <h5>Information</h5>
                <ul>
                    <li>About Us</li>
                    <li>Testimonials</li>
                    <li>Services</li>
                </ul>
             </div>

             <div className='subscription'>
                 <h5>Subscribe For More Information</h5>
                 <input className='email-field' type="Email"  placeholder='Enter Your Email'/>
                 </div>
        </div>
    );
}

export default Footer;