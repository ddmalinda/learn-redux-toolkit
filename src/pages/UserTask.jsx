import React from 'react'
import MainTitles from '../components/titles/MainTitles'
import Background from '../components/bg-colorPage/backGround'
import BackButton from '../components/buttons/BackButton'
import { useParams } from 'react-router-dom'

export default function UserTask() {
    const {params}=useParams()
    return (
      <Background>
        <BackButton path={'/users'}/>
            <MainTitles title={'User Task'}/>
            
      </Background>
        
    )
}
