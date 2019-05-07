import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="output" style={props.style}>
            <p>Username: {props.username}</p>
            <p>Oh how far I'd scale the valleys, if you graced the other side.</p>
        </div>
    )
}

export default userOutput;