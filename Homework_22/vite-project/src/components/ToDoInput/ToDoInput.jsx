import React, { useRef } from 'react';
import './ToDoInput.css'
import {useDispatch} from "react-redux";
import {taskActions} from "../../storage";

function ToDoInput(props) {
    const addToDoInput = useRef(null);
    const dispatch = useDispatch();

    const addToDoTask = () => {
        dispatch(taskActions.addToDoTask(addToDoInput.current.value));
        addToDoInput.current.value = "";
    }
    return (
        <div className="form-container btn-outline-primary p-5 mb-5">
            <form id="add-to-do-form">
                <input ref={addToDoInput} id="add-to-do-input" className="form-control" type="text"></input>
                <button onClick={addToDoTask} type="button" className="btn btn-primary">Add to do task</button>
            </form>
        </div>
    )
}

export default ToDoInput