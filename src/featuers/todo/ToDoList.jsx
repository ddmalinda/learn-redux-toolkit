import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todosSlice';

export default function ToDoList() {
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todos)
    const [input, setInput] = useState('');

    console.log(todo)
    const handleInputChanges = (e) => {
        setInput(e.target.value)

    }
    const handleAddTodo = () => {
        if (input.trim()) {
            dispatch(addTodo(
                {
                    id: Date.now(),
                    text: input,
                    isCompleted: false
                }
            ))
        }
        setInput('')
    }

    return (
        <>
            <div className="mx-auto flex-row max-w-max items-center mt-20 ">
                <div>
                    <h1 className=" flex justify-center  text-7xl font-stretch-95% font-bold text-sky-900">
                        add ToDo List
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-5 mb-5">
                    <input
                        className="text-center w-64 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm border-none focus:outline-none text-amber-50 text-2xl"
                        onChange={handleInputChanges}
                        placeholder="add ToDos"
                        value={input}
                    />
                    <button onClick={handleAddTodo} className="ml-10 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent active:bg-amber-50 active:text-black">
                            ADD
                        </div>
                    </button>
                </div>

            </div>
            <hr className=" h-1 border-0 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="mx-auto flex-row max-w-max items-center mt-10 ">
                <ul>
                    {todo.map((val) => (
                        <li key={val.id}>
                            <div>
                                <p className="m-5">{val.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
