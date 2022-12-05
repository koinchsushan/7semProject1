import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import SecondPage from '../SecondPage/SecondPage';

import './FirstPage.css';

function FirstPage() {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const changeHandler = e => {
        setAge(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(age);
        console.log(gender);
        setAge('');
        navigate('/secondPage', {state: {Age: age, Gender: gender, Name: location.state.name}})

    }

    const selectHandle = e => {
        setGender(e.target.value);
    }

    return(
        <div className='sym-container'>
            <div className='sym-box'>
                <div className='texts'>
                    <div className='sym-h3'>
                        <h3>Information</h3>
                    </div>
                    <div className='sym-textbox'>
                        <h1 className='sym-h1'>Kenko&nbsp;
                            <span className='s-text'>Symptom Checker</span>
                        </h1>
                    </div>
                        <span className='sym-p'>Identify possible conditions and treatment related to your symptoms.</span>
                    <div className='adv-p'>
                        <span>This tool does not provide medical advice.</span>
                    </div>
                </div>
                <div className='d-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='in-container'>
                            <div className='age-div'>
                                <div className='age-lbl'>
                                    <label>Age</label>
                                </div>
                                <div>
                                    <input 
                                        type="number" 
                                        className='age-in' 
                                        value={age} 
                                        onChange={changeHandler} 
                                    />
                                </div>
                            </div>
                            <div className='gender-div'>
                                <div className='age-lbl'>
                                    <label>Gender</label>
                                </div>
                                <div className='gender-in'>
                                    <input type="radio" name="gender" id="male" value="male" onChange={selectHandle}/>
                                    <label for="male" className='gender'>Male</label>
                                    <input type="radio" name="gender" id="female" value="female" onChange={selectHandle}/>
                                    <label for="female" className='gender' >Female</label>
                                </div>
                            </div>
                        </div>  
                        <button className="cont-button">Continue</button>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;

