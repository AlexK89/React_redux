import React from 'react';
import './Person.scss';

export const Person = (props) => {
    return (
        <div className='Person'>
            <p>I am a {props.name}! I am {props.age} years old</p>
            {/* Rendering nested HTML from parrent component */}
            <p>{props.children}</p>
            <input
                onChange={(event) => props.switchNameHandler(event.target.value)}
                value={props.name}
                type="text"
                placeholder='name'
            />
        </div>
    )
}
