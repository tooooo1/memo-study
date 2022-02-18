import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasksSlice'
import loginReducer from '../features/loginSlice'

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        login: loginReducer,
    }

});
