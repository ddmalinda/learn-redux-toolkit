import React, { useEffect, useState } from 'react'
import MainTitles from '../components/titles/MainTitles'
import SubTItles from '../components/titles/SubTItles'
import Background from '../components/bg-colorPage/backGround'
import BackButton from '../components/buttons/BackButton'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersTasks } from '../featuers/users/userTaskSlice'
import TaskTable from '../components/taskTable/TaskTable'
import MiniSubTitle from '../components/titles/MiniSubTitle'

export default function UserTask() {
  const {userId}=useParams()//this use for get user id of user tfrom link
  const dispatch=useDispatch()
  const {  userTasks,userTaskFetching:loading,usertaskFechingError}=useSelector((state)=>state.userTask)
  const { users} = useSelector((state) => state.users);

  //hooks
   const [userName,SetUserName]=useState([])

   
  useEffect(() => {
    if(users&&userId&&users.length>0){
      const user = users.find(u => String(u.id) === String(userId));
      if(user){ 
        SetUserName(user.name); 
      }
    }
}, [users, userId]);
  
  useEffect(()=>{
    if(loading!=='completed'){
      dispatch(fetchUsersTasks(userId))
    }
    
  },[userId,dispatch])
    return (
      <Background>
        <BackButton path={'/users'} name={'Back User List'}/>
            <MainTitles title={'User Task'}/>
            <MiniSubTitle title={userName}/>
            {loading==='loading'?"loading...":
            loading==='completed'?
              <TaskTable tasks={userTasks}/>:''
          }
            
      </Background>
        
    )
}
