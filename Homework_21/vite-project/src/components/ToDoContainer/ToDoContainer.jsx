import React from 'react';

function ToDoContainer(props) {
    const changeTaskStatus = (taskIndex) => {
        props.setToDoTasks(props.toDoTasks.map((task, index) => {
            if (taskIndex === index) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="container w-50">
            <ul id="to-do-list" className="list-group">
                {props.toDoTasks.map((task, index) => (<li className={task.completed ? "done-task" : "new-task"} onClick={() => {changeTaskStatus(index)}} key={index}>{task.name}</li>))}
            </ul>
        </div>
    )
}

export default ToDoContainer