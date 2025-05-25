import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
        <h1 className={'justify-center'}>Homepage</h1>
        <Link to={'/todos'}>ToDO List</Link>
        <Link to={'/users'} >User List</Link>
    </div>
  )
}

export default Homepage