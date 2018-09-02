import React from 'react';

const question = (props) => {
    const question = props.question.replace(/<\/?[^>]+(>|$)/g, "");
    return (
       <h4>{question}</h4>
    );
};

export default question;