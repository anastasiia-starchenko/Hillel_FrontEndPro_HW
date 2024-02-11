import React, { useState } from 'react';
import './Smile.css'

function Smile(props) {
    const [clicks, increaseClicks] = useState(0);
    return (
        <div id={props.index} className="smile-container">
            <span className="smile">{props.smile}</span>
            <button className="btn btn-primary" onClick={() => increaseClicks(clicks + 1)}>Click to vote</button>
            <span className="votes">Votes: {clicks}</span>
        </div>
    )
}

export default Smile