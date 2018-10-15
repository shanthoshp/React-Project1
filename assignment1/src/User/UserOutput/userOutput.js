import React from 'react';
import './userOutput.css'

const userOutput = (props) => {
    return(
        <div>
            <p><b>Username: <i className={props}>{props.username}</i> </b></p>
            <p><i className={props}>{props.username}</i> is learning React right now.</p>
            <p><i>Did you know that movie trailers were originally shown after the movie, which is why they were called 'trailers'</i></p>
        </div>
    );
}

export default userOutput;