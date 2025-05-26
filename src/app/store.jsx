import { configureStore } from "@reduxjs/toolkit";
import  {todosReducer}  from "../featuers/todo/todosSlice";
import  userReducer  from "../featuers/users/usersSlice";


export const store =configureStore({
    reducer:{
        todos:todosReducer,
        users:userReducer,
    }
})