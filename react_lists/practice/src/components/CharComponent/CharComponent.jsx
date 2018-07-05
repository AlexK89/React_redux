import React from 'react';
import './CharComponent.scss';

export const CharComponent = (props) => {
    return (<div className="letters">
        {
            props.letters.length
                ? props.letters.map((char, key) => {
                    return (<div onClick={() => props.removeChar(key)} className="letters__item" key={key}>{char}</div>)
                })
                : ''
        }
    </div>)
}

export default CharComponent;
