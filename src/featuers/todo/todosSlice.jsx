import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const todoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload);
        },
        removeTodo:(state,action)=>{
            return state.filter((todo)=>todo.id!==action.payload)
        },
        toggleTodo:(state,action)=>{
            const todo=state.find((todo)=>todo.id===action.payload);
            if(todo){
                todo.isCompleted= !todo.isCompleted;
            }
        },

    }
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
export const todosReducer = todoSlice.reducer;