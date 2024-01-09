import React, { useState } from 'react'
import AuthLogin from '../features/auth/components/AuthLogin'
import Userinfo from '../features/auth/components/Userinfo'
import { useDispatch, useSelector } from 'react-redux'
import { resetUserData, selectLoggedInUser } from '../features/auth/UserSlice'
const Login = ({ setDisplayLogin }) => {

  const user = useSelector(selectLoggedInUser)

  const [loginSuccess, setLoginsuccess] = useState()
  const dispatch = useDispatch()

  console.log(user);


  return (
    <div className='absolute top-0 left-1/2 transform  -translate-x-1/2 h-screen w-full '>
      <div className='h-full w-full bg-gray-500 opacity-40 relative' onClick={() =>{ if(!loginSuccess){setDisplayLogin(prev => !prev);dispatch(resetUserData())}}}></div>
      <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2'>

        {
          !user ?
            <AuthLogin setDisplayLogin={setDisplayLogin} setLoginsuccess={setLoginsuccess} />
            :(user?.status?<Userinfo user={user} setDisplayLogin={setDisplayLogin} />:null)
            
        }
      </div>

    </div>
  )
}

export default Login