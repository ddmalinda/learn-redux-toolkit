

import { Route, Routes } from 'react-router-dom'
import ToDoList from './pages/ToDoList'
import UserList from './pages/UserList'
import Homepage from './pages/Homepage'
import UserTask from './pages/UserTask'

function App() {


  return (
    <>
      <div >
        <Routes>
        <Route path={'/'} element={<Homepage/>}/>
        <Route path={'/todos'} element={<ToDoList/>}/>
        <Route path={'/users'} element={<UserList/>}/>
        <Route path={'/users/:userId/tasks'} element={<UserTask/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App
