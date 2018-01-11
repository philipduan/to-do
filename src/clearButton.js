import React, { Component } from 'react';
const ClearButton = ({removeCompleted}) => {
    return(
        <button onClick={removeCompleted}>
            Remove Completed
        </button>
    )
};

export default ClearButton;