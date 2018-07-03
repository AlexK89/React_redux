import React from 'react';

export const Person = (props) => {
    return (
        <div>
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
