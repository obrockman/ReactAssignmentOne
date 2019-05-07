import React from 'react';

const userInput = (props) => {
    return (
        <div className="input">
            <input type="text" onChange={props.inputChanged} value={props.username}/>
        </div>
    )
};


export default userInput;