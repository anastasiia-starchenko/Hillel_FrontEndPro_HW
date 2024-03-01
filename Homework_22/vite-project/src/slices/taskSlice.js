import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [{name: "first new task", completed: false},
            {name: "first completed task", completed: true}]
    },
    reducers: {
        changeTaskStatus(state, action) {
            state.tasks = state.tasks.map((task, index) => {
                if (action.payload === index) {
                    return {...task, completed: !task.completed};
                } else {
                    return task;
                }
            });
        },
        addToDoTask(state, action) {
            let newTask = {name: action.payload, completed: false};
            state.tasks.push(newTask);
        }
    }
});