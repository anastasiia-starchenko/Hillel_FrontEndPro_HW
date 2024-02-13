import React, { useState } from 'react';
import './Smile.css'

function Smile(props) {
    const [clicks, increaseClicks] = useState(0);
    const vote = () => {
        increaseClicks(clicks + 1);
        props.votingResults(clicks + 1, props.smile);
    }
    return (
        <div id={props.index} className="smile-container">
            <span className="smile">{props.smile}</span>
            <button className="btn btn-primary" onClick={vote}>Click to vote</button>
            <span className="votes">Votes: {clicks}</span>
        </div>
    )
}

export default Smile