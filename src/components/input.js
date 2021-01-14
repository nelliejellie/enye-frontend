import React, {useState} from 'react'

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
                <label>
                Name:
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='search by username'/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Input;