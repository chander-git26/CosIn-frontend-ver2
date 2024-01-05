import React, { useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Login from './Components/Login'

const Home = () => {
  const [ displayLogin, setDisplayLogin ] = useState(false)
  return (
   <>
   <div className='h-screen relative'>
   <Header loginToggle={setDisplayLogin}/>
   <Banner loginToggle={setDisplayLogin}/>
    {displayLogin?<Login loginToggle={setDisplayLogin}/>:null} 
   </div>
   </>
  )
}

export default Home