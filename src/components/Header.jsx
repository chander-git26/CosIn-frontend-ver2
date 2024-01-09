import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
// import Login from './Login'
import Login from '../components/Login'
import Menu from './Menu';

const Header = ({ setDisplayLogin, displayLogin }) => {

  
  const [scroll, setScroll] = useState(false);



 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 200);
   });
 }, []);


  return (
    <>
      <div className={`fixed w-full bg-white  ${scroll?"shadow-lg":""}`}>

        <div className='container  mx-auto flex justify-between mt-6  inset-x-0  items-center '>
          <div className='flex items-center gap-3'>
            <img src={logo} className='w-12' alt="Cos insurance logo" />
            <h1 className='font-bold text-2xl py-8 text-gray-600'>COS Insurance</h1>
          </div>
          <div className='flex  items-stretch'>
            <Menu/>
            <button  onClick={() => setDisplayLogin(prev => !prev)} className='bg-accent font-medium self-center  p-3 px-4 hover:bg-accent-hover  hover:shadow-2xl  hover:shadow-accent rounded-md hover:text-white transition-all	 duration-200   text-sm'>Login/Register</button>
          </div>
        </div>
          {displayLogin ? <Login setDisplayLogin={setDisplayLogin} /> : null}
      </div>
    </>
  )
}

export default Header