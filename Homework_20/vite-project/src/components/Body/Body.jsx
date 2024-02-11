import './Body.css'
import Smiles from "../../assets/helper.js";
import Smile from "../Smile/Smile.jsx";
import {useState} from "react";
import {getMax} from "../../assets/helper.js";


function Body() {
    const [winner, setWinner] = useState(null);

    const showResults = () => {
        let results = {}, maximumVotesIds, winners = [];
        Array.from(document.getElementsByClassName("smile-container")).forEach((smile) => {
            results[smile.id] = smile.getElementsByClassName("votes")[0].textContent.split("Votes: ")[1];
        });

        maximumVotesIds = getMax(results);
        maximumVotesIds.forEach((id) => {
            winners.push(document.getElementById(id).getElementsByClassName("smile")[0].textContent)
        })
        setWinner(winners);
    }

    return (
        <div id="body-container">
            <div className="smiles-container" onClick={() => setWinner(null)}>
                {Smiles.map((smile, index) => (<Smile key={index} smile={smile} index={index}></Smile>))}
            </div>
            <button className="btn btn-success show-results-btn" onClick={showResults}>Show Results</button>
            {winner && <p>Winner: {winner}</p>}
        </div>
    )
}

export default Body