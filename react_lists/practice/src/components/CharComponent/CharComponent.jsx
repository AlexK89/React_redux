import React from 'react';
import './CharComponent.scss';

export const CharComponent = (props) => {
    let letters = [];

    for(let char of props.inputText) {
        letters.push(char);
    }
    return (
        <div className="letters">
            {
                letters.length
                    ?
                        letters.map((char, key) => {
                            console.log(Boolean(letters.length));
                            return (
                                <div className="letters__item" key={key}>{char}</div>
                            )
                        })
                    : ''
            }
        </div>
    )
}

export default CharComponent;
