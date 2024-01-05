import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import Mobilelogin from './Mobilelogin';
import Emaillogin from './Emaillogin';
import VerifyOtp from './VerifyOtp';


const AuthLogin = ({loginToggle}) => {
  const [logintype,setLogintype] =  useState('mobile')
  const [otp,setOtp] = useState()

  

 
  return (
    <div className={` rounded-xl flex h-[475px] w-[900px] popOver`} >
        <div className='w-1/2 flex flex-col justify-between bg-gray-800 h-full overflow-hidden rounded-l-xl pl-8 py-10'>

            <h1 className='text-4xl leading-relaxed font-semibold text-white'>Insurance at <br /> <span className='text-3xl'> One Place. </span></h1>

            <h1 className='font-semibold text-white text-xl'>Health Insurance</h1>

        </div>
        <div className='w-1/2 bg-white flex flex-col relative justify-between  h-full overflow-hidden rounded-r-xl px-9   py-10'>

            <h1 className='text-2xl leading-relaxed font-semibold text-gray-600 text-center  '>Welcome to Cos </h1>

            <h1 className='font-semibold text-white text-xl'>Health Insurance</h1>

            {logintype==='mobile'?
            (!otp?<Mobilelogin setLogintype={setLogintype} setOtp={setOtp}/>:<VerifyOtp/>)
            :(!otp?<Emaillogin setLogintype={setLogintype} setOtp={setOtp}/>:<VerifyOtp/>)}


            <h1 className='text-[12px] font-normal text-gray-600 text-center '>By Proceeding, I agree to <span className='hover:text-accent-hover hover:cursor-pointer hover:text-shadow hover:[text-shadow:_0_0_1px_#E5AA18]'> T&C , Privacy Policy & Tariff Rates</span></h1>

            <button className='text-gray-600 absolute top-4 right-4 text-2xl' onClick={()=>loginToggle(prev=>!prev)}><i class="bi bi-x"></i></button>
        </div>
    </div>
  )
}

export default AuthLogin