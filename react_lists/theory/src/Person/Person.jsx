import React from 'react';
import './Person.scss';

export const Person = (props) => {
    return (
        <div
            onClick = {props.click}
            className='Person'>
            <p>I am a {props.name}! I am {props.age} years old</p>
            {/* Rendering nested HTML from parrent component */}
            <p>{props.children}</p>
            <input
                onChange={(event) => props.switchNameHandler(event.target.value)}
                type="text"
                placeholder='name'
            />
        </div>
    )
}
