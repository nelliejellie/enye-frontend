import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";

const Input = (props) => {
    const [input, setInput] = useState('')

    const handleSubmit = (e) =>{
        props.handleSubmit(input)
        setInput('')
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='search by username' className='inputData'/>
                <input type="submit" value="Submit" className='submitData'/>
            </form>
            
        </div>
    )
}

export default Input;