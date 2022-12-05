import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import './SecondPage.css';
import ShowSymp from './ShowSymp';

function SecondPage({ bdata }){
    // const[value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const [symptom, setSymptom] = useState('');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const ref = useRef(null);
    const [symptom1, setSymptom1] = useState('');
    const [symptom2, setSymptom2] = useState('');
    const [symptom3, setSymptom3] = useState('');
    const [symptom4, setSymptom4] = useState('');
    const [symptom5, setSymptom5] = useState('');
    const [result, setResult] = useState('');
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close)
    },[])

    function close(e) {
        setOpen(e && e.target === ref.current);
    }

    const handleChange = e => {
        const inputs = e.target.value;
        const newFiltered = bdata.filter((value) => {
            return value.name.toLowerCase().includes(inputs.toLowerCase());

        });

        if(inputs === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFiltered);
        }
        setSymptom(inputs);
    };

    function onChange(val) {
        setSymptom(val);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setData([...data, {item: symptom.name, key: symptom.id}]);
        console.log("task=", data);
        setSymptom('');
        setSymptom1(data[0].item);
        setSymptom2(data[1].item);
        setSymptom3(data[2].item);
        setSymptom4(data[3].item);
        setSymptom5(data[4].item);

    }

    const handleAdd = () =>{
        const params = {symptom1, symptom2, symptom3, symptom4, symptom5}
        console.log(params);
        
        axios
            .post('http://127.0.0.1:8000/api/v1/predict', params)
            .then((res) => {
                const data = res.data.Disease;
                getResult(data);
            })
            .catch((error) => console.log(error));

    }
        
    function getResult(d) {
        // setResult(d);
        // console.log("result",d);
        navigate('/report',
            {state: {
                Age: location.state.Age,
                Gender: location.state.Gender,
                Name: location.state.Name,
                Symptom1: symptom1,
                Symptom2: symptom2,
                Symptom3: symptom3,
                Symptom4: symptom4,
                Symptom5: symptom5,
                Result: d
            }}
        )
    }
        

    return(
        <div className='entersym-container'>
            <div className='entersym-box'>
                <div className='enter'>
                    <div className='enter-heading'>
                        <h1 className='enter-h1'>What are your Symptoms?</h1>
                    </div>
                    <div className='enter-form'>
                        <form className='form-enter' onSubmit={handleSubmit}>
                            <div className='selected-value' onClick={() => setOpen(prev => !prev)}>
                            <input
                                ref={ref}
                               className="form-in"
                               type="text"
                               name="symp"
                               placeholder="e.g. headache, fever"
                               onChange={handleChange}
                               value={symptom.name}
                            />

                            </div>
                            <button type="submit" className='add'>Add</button>
                        </form>
                    </div>
                    <div className='dropdown-box'>
                        <div className={`options ${open ? "open" : null}`}>
                            {
                                filteredData.map((value) => {
                                    return (
                                        <a className='option' onClick={() => {
                                            onChange(value)
                                        }} value={filteredData}>
                                            <p className='list-name'>{value.name}</p>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* <div className='enter-form'>
                        <div className='form-enter'>
                            <DropDown 
                                symptoms={symptoms} 
                                prompt="Select your symptoms..." 
                                value={value}
                                id="id"
                                label="name"
                                onChange={val => setValue(val)}
                                onChange={handleChange}
                            />
                            <button className='add' onClick={handleSubmit}>ADD</button>
                        </div>
                    </div> */}
                </div>
                <div className='showsymp'>
                    <div>
                        <ShowSymp data={data} setData = {setData} />
                    </div>
                </div>
                <button className='add-button' onClick={handleAdd} >Continue</button>
            </div>
        </div>
    )
}

export default SecondPage;