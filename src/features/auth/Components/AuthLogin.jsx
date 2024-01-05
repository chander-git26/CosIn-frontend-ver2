import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import Mobilelogin from './Mobilelogin';


const AuthLogin = ({loginToggle}) => {


  

  return (
    <div className=' rounded-xl flex h-[475px] w-[900px] popOver'>
        <div className='w-1/2 flex flex-col justify-between bg-accent h-full overflow-hidden rounded-l-xl pl-8 py-10'>

            <h1 className='text-4xl leading-relaxed font-semibold text-gray-800 '>Insurance at <br /> <span className='text-3xl'> One Place. </span></h1>

            <h1 className='font-semibold text-white text-xl'>Health Insurance</h1>

        </div>
        <div className='w-1/2 bg-white flex flex-col relative justify-between  h-full overflow-hidden rounded-r-xl   py-10'>

            <h1 className='text-2xl leading-relaxed font-semibold text-gray-600 text-center  '>Welcome to Cos </h1>

            <h1 className='font-semibold text-white text-xl'>Health Insurance</h1>

            <Mobilelogin></Mobilelogin>

            <button className='text-gray-600 absolute top-4 right-4 text-2xl' onClick={()=>loginToggle(prev=>!prev)}><i class="bi bi-x"></i></button>
        </div>
    </div>
  )
}

export default AuthLogin