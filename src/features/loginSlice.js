import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: '' }

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        loginTask: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { loginTask } = loginSlice.actions;

export default loginSlice.reducer;