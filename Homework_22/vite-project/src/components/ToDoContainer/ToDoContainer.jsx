import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {taskActions} from "../../storage/index.js";

function ToDoContainer() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    return (
        <div className="container w-50">
            <ul id="to-do-list" className="list-group">
                {tasks.tasks.map((task, index) => (<li className={task.completed ? "done-task" : "new-task"} onClick={() => {dispatch(taskActions.changeTaskStatus(index))}} key={index}>{task.name}</li>))}
            </ul>
        </div>
    )
}

export default ToDoContainer