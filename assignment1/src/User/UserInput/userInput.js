import React from 'react';
import './userInput.css'

const userInput = (props) => {
    return(
        <div className='userInput'>
            <p>Enter Username:  <input className='input' onChange={props.input} value={props.username}/></p>
        </div>
    );
}


export default userInput;