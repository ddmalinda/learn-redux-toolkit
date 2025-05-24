import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../featuers/todo/todosSlice";

export const store =configureStore({
    reducer:{
        todos:todosReducer,
    }
})