import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from './todosSlice';
import { Link } from 'react-router-dom';

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
       // setInput('')
    }
    const handleToggleToDO = (id) => {
        dispatch(toggleTodo(id))

    }
    const handleDelelteToDO = (id) => {
        dispatch(removeTodo(id))

    }
    return (
         <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
          <div className="grid- m-5 bg-amber-50">

            <div className="flex justify-end-safe m-5">
               <Link className="px-8 py-2 border-2 border-solid border-black  rounded-[6px] transition duration-200 text-black hover:bg-black hover:text-white"to={'/users'}>back</Link>
            </div>
            <div className="mx-auto flex-row max-w-max items-center  ">
                <div>
                    <h1 className=" flex justify-center  text-7xl font-stretch-95% font-bold text-sky-900 ">
                        ADD TODO LIST
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-5 mb-5">
                    <input
                        className="text-center min-w-100 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-sm border-none focus:outline-none text-amber-50 text-2xl "
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
                <table className={'min-w-full border border-gray-300 rounded-t-lg overflow-hidden table-fixed'}>
                    <thead>
                        <tr className={'mx-auto bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-extralight '}>
                            <th className={'py-3 px-15 min-w-2xs text-2xl' }>ToDO</th>
                            <th  className={'py-3 px-15 text-2xl'}>Status</th>
                            <th  className={'py-3 px-15 text-2xl'}>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-amber-50'>


                        {todo.map((val) => (
                            <tr key={val.id}>
                                      <td className="py-2 px-4 text-xl break-words max-w-2xs">{val.text}</td>
                                <td className="text-center">

                                    <button
                                        onClick={() => handleToggleToDO(val.id)}
                                        className={`${val.isCompleted ? 'bg-green-600' : 'bg-black'} w-35 py-2  rounded-[6px] relative group transition duration-200 text-white active:bg-amber-50 active:text-black`}
                                        >
                                        {val.isCompleted ? 'completed' : 'Not completed'
                                        }</button>
                                </td>
                                <td className='text-center'>

                                    <button
                                        onClick={() => handleDelelteToDO(val.id)}
                                        className="px-8 py-2 bg-black rounded-[6px] relative transition duration-200 text-red-600 active:bg-amber-50 active:text-black"
                                        >
                                        Remove
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
                        </div>
              </div>
    
    )
}
