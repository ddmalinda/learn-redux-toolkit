import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../featuers/users/usersSlice';
import MainTitles from '../components/titles/MainTitles';
import Background from '../components/bg-colorPage/backGround';
import { Link } from 'react-router-dom';
import BackButton from '../components/buttons/BackButton';

export default function UserList() {
    const dispatch = useDispatch()
    const { users, userFetching: loading, userFetchingError } = useSelector((state) => state.users);

    console.log(users)
    useEffect(() => {
        if(loading!=='completed'){
            dispatch(fetchUsers())
        }
    }, [dispatch])
    return (
        <Background>
            <BackButton path={'/'} name={'Back HomePage'}/>
        <div className='mx-auto grid justify-around '>
           <MainTitles title={'User List'}/>
            {loading === 'loading' ? "loading...." :
                loading === 'completed' ?
                    users.map((val, key) => {
                        return (
                            <div key={key}>
                                <div className='my-2 text-xl flex font-medium hover:text-fuchsia-900 hover:scale-150 transition duration-300  justify-center'>
                                  <Link to={`/users/${val.id}/tasks`}>
                                  {val.name}
                                  </Link>  
                                </div>
                            </div>
                        )   
                    }) : console.error(userFetchingError)}
        </div>
                    </Background>
    )
}
