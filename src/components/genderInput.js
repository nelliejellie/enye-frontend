import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";

const GenderInput = (props) => {
    const [genderValue, setGenderValue] = useState('')

    const handleGenderSubmit = (e) =>{
        props.handleGenderSubmit(genderValue)
        console.log(genderValue)
        e.preventDefault();
    }

    return (
        <div>
           <form onSubmit={handleGenderSubmit}>
                <label>
                
                <select value={genderValue} onChange={e => setGenderValue(e.target.value)} className='genderData'>
                    <option value="">Filter by gender:</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer to skip">Prefer to skip</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form> 
        </div>
    )
}

export default GenderInput;
