import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                text: action.payload.task,
                login: action.payload.pop,
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
                sec: new Date().getSeconds(),
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => state.filter((item) => item.id !== action.payload.id),
    }
});

export const {addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;