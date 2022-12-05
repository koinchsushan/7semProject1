import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './SignUp.css';
import Input from '../AccountLogin/Input';
import useForm from '../AccountLogin/useForm';
import validate from '../AccountLogin/validateInfo';
import kenko from '../images/kenko-png.png';

function SignUp(){

    // const {handleChange, handleSubmit, values, errors} = useForm(validate);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confrimPassword: ''
    });

    const changeHandler = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        setErrors(validate(values));
        console.log("submit", values);
        navigate('/')
    }

    function validate(values) {
        let errors = {}

        if(!values.username.trim()) {
            errors.username = "Enter Username or Email Address!"
        } else if(!/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)){
            errors.username = "Email Address is invalid!"
        }

        if(!values.password) {
            errors.password = "Enter Password!"
        } else if (values.password.length < 6) {
            errors.password = "Passwords need to be 6 characters or more!"
        }

        return errors;
    }
    
    return(
        <section>
            <div className='signup-main-container'>
                <div>
                    <h2 className="heading">Sign Up to Kenko</h2>             
                </div>            
                <div className="signupcontainer">
                        <div className="signup-box">
                                <div className="left-column">
                                    <div className="left-wrapper">
                                        <img className='img-logo' src={kenko} />
                                    </div>
                                </div>
                                <div className="right-column">
                                        <div className="right-wrapper">
                                            <img src={kenko} />
                                        </div>
                                    
                                    <div className="form-box">
                                        <form onSubmit={submitHandler} className='input-field'>
                                        <div className='namesection'>
                                            <Input
                                            className="signin-input"
                                            name="FirstName" 
                                            type="text"
                                            id="FirstName"
                                            label="FirstName" 
                                            value={values.FirstName}
                                            onChange={changeHandler}
                                            />
                                            <Input 
                                                className="signin-input"
                                                label="LastName"
                                                id="LastName"
                                                name="LastName"
                                                type="text"
                                                value={values.LastName}
                                                onChange={changeHandler}
                                            />
                                            </div>  

                                        <div className='epsec'> 
                                            <Input 
                                                className="signin-input"
                                                label="Username or Email Address"
                                                id="username"
                                                name="username"
                                                type="text"
                                                value={values.username}
                                                onChange={changeHandler}
                                            />
                                            {errors.username && <p>{errors.username}</p>}
                                        </div>  

                                        <div className='pcsec'>
                                            <Input 
                                                className="signin-input"
                                                label="Password"
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={values.password}
                                                onChange={changeHandler}
                                            />
                                            {errors.password && <p>{errors.password}</p>}
                                            <Input 
                                                className="signin-input"
                                                label="ConfirmPassword"
                                                id="CPassword"
                                                name="CPassword"
                                                type="password"
                                                value={values.CPassword}
                                                onChange={changeHandler}
                                            />
                                            </div>    
                                            <button className="signin-button">Sign Up</button>
                                        </form>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;