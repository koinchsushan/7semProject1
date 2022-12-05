import React, { useState, useEffect, useRef } from 'react';

import './DropDown.css';

function DropDown({ symptoms, prompt, value, onChange, label, id }) {
    
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    },[]);

    function close(e) {
        // console.dir([e.target, ref.current])
        setOpen(e && e.target === ref.current)
    }

    function filter(symptoms) {
        return symptoms.filter(
            (symptom) => symptom[label].toLowerCase().indexOf(query.toLowerCase()) > -1);
    }

    function displayValue() {
        if(query.length > 0) return query;
        if(value) return value[label];
        return "";
    }

    return (
        <div className='dropdown'>
            <div className='control' onClick={() => setOpen((prev) => !prev)}>
                <div className='selected-value'>
                    <input 
                        ref={ref}
                        className='input-value' 
                        type='text' 
                        placeholder={value ? value[label] : prompt} 
                        value={displayValue()}
                        onChange={e => {
                            setQuery(e.target.value)
                            onChange(null)
                        }}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={`arrow ${open ? "open" : null}`}></div>
            </div>
            <div className={`options ${open ? "open" : null}`}>
                {
                    filter(symptoms).map((symptom) => (
                    <div 
                        key={symptom[id]}
                        className={`option ${value === symptom ? "selected" : null}`} 
                        onClick={() => {
                            setQuery("");
                            onChange(symptom);
                            setOpen(false);
                        }}
                    >
                        {symptom[label]}</div>
                    
                ))}
            </div>
        </div>
    )
}

export default DropDown;