import React from 'react';
import './Person.scss';

export const Person = (props) => {
    return (
        <div className='Person'>
            <p>{props.personId}</p>
            <p onClick = {() => props.click(props.index)}>I am a {props.name}! I am {props.age} years old</p>
            {/* Rendering nested HTML from parrent component */}
            <p>{props.children}</p>
            <input
                onChange={(event) => props.switchNameHandler(event.target.value, props.personId)}
                type="text"
                placeholder='name'
            />
        </div>
    )
}
