import React from 'react';

export const Validation = (props) => {
    return (
        <h4>
            {
                props.inputTextLength < 5
                    ?
                        'Provided text is too short'
                    :
                'Provided text is long enough!'
            }
        </h4>
    )
}

export default Validation;
