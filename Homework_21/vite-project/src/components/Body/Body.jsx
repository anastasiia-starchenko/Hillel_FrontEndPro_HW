import './Body.css'
import Smiles from "../../assets/helper.js";
import ToDoInput from "../ToDoInput/ToDoInput.jsx";
import {useState} from "react";
import ToDoContainer from "../ToDoContainer/ToDoContainer.jsx";


function Body() {
    const [toDoTasks, setToDoTasks] = useState([
        {name: "first new task", completed: false},
        {name: "first completed task", completed: true}
    ]);

    return (
        <div id="body-container">
            <ToDoContainer setToDoTasks={setToDoTasks} toDoTasks={toDoTasks}></ToDoContainer>
            <ToDoInput setToDoTasks={setToDoTasks} toDoTasks={toDoTasks}></ToDoInput>
        </div>
    )
}

export default Body