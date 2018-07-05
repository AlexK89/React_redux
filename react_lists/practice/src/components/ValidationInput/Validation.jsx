import React from 'react';

export const Validation = (props) => {
    const validationMessage = props.inputTextLength < 5
        ? 'Provided text is too short'
        : 'Provided text is long enough!';
        
    return (<h4>{validationMessage}</h4>)
}

export default Validation;
