import React, { useState } from 'react'
import AuthLogin from '../../auth/Components/AuthLogin'
import Userinfo from '../../auth/Components/Userinfo'

const Login = ({ loginToggle }) => {

  const [loginSuccess, setLoginsuccess] = useState()

  console.log(loginSuccess);


  return (
    <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 h-full w-full '>
      <div className='h-full w-full bg-gray-500 opacity-40 relative' onClick={() =>{ !loginSuccess && loginToggle(prev => !prev)}}></div>
      <div className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2'>

        {
          !loginSuccess ?
            <AuthLogin loginToggle={loginToggle} setLoginsuccess={setLoginsuccess} />
            : <Userinfo loginToggle={loginToggle} />
        }
      </div>

    </div>
  )
}

export default Login