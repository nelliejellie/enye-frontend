import React from 'react';


export default function Card(props) {
    return (
        <div className="card">
            <div className="container">
                {props.children} 
            </div>
        </div>
    )
}