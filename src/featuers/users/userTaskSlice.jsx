import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch task for selected user 
export const fetchUsersTasks = createAsyncThunk('users/fetchTasks', async (userId) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    return response.data;
})

const initialState = {
    userTasks: [],
    userTaskFetching: 'notStarted',
    usertaskFechingError: null,
}

const userTaskSlice = createSlice({
    name: 'userTask',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
        .addCase(fetchUsersTasks.pending, (state) => {
            state.userTaskFetching = 'loading';
            state.usertaskFechingError = null;
        })
        .addCase(fetchUsersTasks.fulfilled, (state, actions) => {
            state.userTaskFetching = 'completed';
            state.userTasks = actions.payload;
        })
        .addCase(fetchUsersTasks.rejected, (state, action) => {
            state.userTaskFetching = 'failure';
            state.usertaskFechingError = action.error.message;
        });
}
})
export default userTaskSlice.reducer;