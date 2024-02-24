import React, { useRef } from 'react';
import './ToDoInput.css'

function ToDoInput(props) {
    const addToDoInput = useRef(null);

    const addToDoTask = () => {
        let newTask = {name: addToDoInput.current.value, completed: false};
        props.setToDoTasks([...props.toDoTasks, newTask]);
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