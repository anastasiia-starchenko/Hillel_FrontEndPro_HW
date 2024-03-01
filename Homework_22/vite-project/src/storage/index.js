import {configureStore} from "@reduxjs/toolkit";
import {taskSlice} from "../slices/taskSlice.js";

const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})

export const taskActions = taskSlice.actions;
export default store;