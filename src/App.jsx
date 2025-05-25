

import { Route, Routes } from 'react-router-dom'
import ToDoList from './featuers/todo/ToDoList'
import UserList from './featuers/users/UserList'
import Homepage from './pages/Homepage'

function App() {


  return (
    <>
      <div >
        <Routes>
        <Route path={'/'} element={<Homepage/>}/>
        <Route path={'/todos'} element={<ToDoList/>}/>
        <Route path={'/users'} element={<UserList/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
