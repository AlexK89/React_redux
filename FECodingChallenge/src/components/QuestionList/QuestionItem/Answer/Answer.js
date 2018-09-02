import React from 'react';

const answer = (props) => {
    const answer = props.answer.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <p>{answer}</p>
    );
};

export default answer;