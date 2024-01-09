import React, { useState } from 'react'
import AuthLogin from '../features/auth/components/AuthLogin'
import Userinfo from '../features/auth/components/Userinfo'
const Login = ({ setDisplayLogin }) => {

  const [loginSuccess, setLoginsuccess] = useState()

  console.log(loginSuccess);


  return (
    <div className='absolute top-0 left-1/2 transform  -translate-x-1/2 h-screen w-full '>
      <div className='h-full w-full bg-gray-500 opacity-40 relative' onClick={() =>{ !loginSuccess && setDisplayLogin(prev => !prev)}}></div>
      <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2'>

        {
          !loginSuccess ?
            <AuthLogin setDisplayLogin={setDisplayLogin} setLoginsuccess={setLoginsuccess} />
            :(!loginSuccess?.data?.userId?<Userinfo setDisplayLogin={setDisplayLogin} />:null)
            
        }
      </div>

    </div>
  )
}

export default Login