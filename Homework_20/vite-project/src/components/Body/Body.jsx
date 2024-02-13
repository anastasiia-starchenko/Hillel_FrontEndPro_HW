import './Body.css'
import Smiles from "../../assets/helper.js";
import Smile from "../Smile/Smile.jsx";
import {useState} from "react";


function Body() {
    const [winner, setWinner] = useState({smiles: [], count: 0});
    const [votingResult, setVotingResult] = useState(false);

    const votingResults = (count, smile) => {
        if(winner.count < count) {
            setWinner({smiles: smile, count: count});
        } else if (winner.count === count) {
            setWinner({smiles: [winner.smiles, smile], count: count})
        }
    }

    return (
        <div id="body-container">
            <div className="smiles-container" onClick={()=>{setVotingResult(false)}}>
                {Smiles.map((smile, index) => (<Smile key={index} smile={smile} index={index} votingResults={votingResults}></Smile>))}
            </div>
            <button className="btn btn-success show-results-btn" onClick={()=>{setVotingResult(true)}}>Show Results</button>
            {votingResult && <p>Winner: {winner.smiles}</p>}
        </div>
    )
}

export default Body