import React from 'react';

import './SignIn.css';
import Input from './Input';
import useForm from './useForm';
import validate from './validateInfo';
import kenko from '../images/kenko-png.png';
import { Link } from 'react-router-dom';

function SignIn(){

    const {handleChange, handleSubmit, values, errors} = useForm(validate);
    
    return(
        <section>
            <div className="signin-container">
                    <div className="box">
                        <div className="left-column">
                            <div className="left-wrapper">
                                <img src={kenko} className='img-logo' />
                            </div>
                        </div>

                        <div className="right-column">
                                <div className="right-wrapper">
                                    <img className='img-logo' src={kenko} />
                                </div>
                            <div className="form-header">
                                <h2 className="heading">Sign in to Kenko</h2>
                            </div>
                            <div className="form-box">
                                <form onSubmit={handleSubmit} className='input-field'>
                                    <div>
                                        <Input 
                                            autoFocus
                                            className="signin-input"
                                            label="Username or Email Address"
                                            id="username"
                                            name="username"
                                            type="text"
                                            value={values.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && <p className='signin-p'>{errors.username}</p>}
                                        <Input 
                                            className="signin-input"
                                            label="Password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <p className='signin-p'>{errors.password}</p>}
                                    </div>

                                    <div>
                                        <button className="signin-button">Sign In</button>
                                    </div>
                                </form>
                            </div>

                            <div className='new-account'>
                                <Link to='/signup'> <a>Create a new account!</a> </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default SignIn;