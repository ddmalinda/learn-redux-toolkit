import React from 'react'
import { Link } from 'react-router-dom'
import MainTitles from '../components/titles/MainTitles'
import SubTItles from '../components/titles/SubTItles'
import Background from '../components/bg-colorPage/backGround'

function Homepage() {
  return (
    <div >
        <Background>
        <MainTitles title={'home page'} className='mt-5'/>
        <div className='flex justify-center'>
        <Link to={'/todos'}>{<SubTItles title={'ToDO List'}/>}</Link>
        <Link to={'/users'} >{<SubTItles title={'User List'}/>}</Link>
        </div>
        </Background>
    </div>
  )
}

export default Homepage