import React from 'react'
import logo from '../assets/images/logo.png'
console.log(logo);
const Header = ({loginToggle}) => {
  return (
    <div className='container  fixed   mx-auto flex justify-between my-6  inset-x-0     items-center '>
        <div className='flex items-center gap-3'>
            <img src={logo} className='w-12' alt="Cos insurance logo" />
            <h1 className='font-bold text-2xl py-8 text-gray-600'>COS Insurance</h1>
        </div>
        <div>
            <button onClick={()=>loginToggle(prev=>!prev)} className='bg-accent font-medium  p-3 px-4 hover:bg-accent-hover  hover:shadow-2xl  hover:shadow-accent rounded-md hover:text-white transition-all	 duration-200   text-sm'>Login/Register</button>
        </div>
    </div>
  )
}

export default Header