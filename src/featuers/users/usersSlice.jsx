import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//AsyncThunk Action
//fetch user from API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
})

const initialState = {
    users: [],
    userFetching: 'notStarted',
    userFetchingError: null,
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    //this not object, it is function
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.userFetching = 'loading';
            state.userFetchingError = null;
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userFetching = 'completed';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.userFetching = 'faliure';
                state.userFetchingError = action.error.message;
            })
    }

})