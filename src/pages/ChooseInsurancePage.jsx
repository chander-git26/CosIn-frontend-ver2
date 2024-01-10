import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ChoosePolicies from '../features/InsurancePolicies/ChoosePolicies'
import { Outlet } from 'react-router-dom'

const ChooseInsurancePage = () => {
  return (
    <div className='h-screen  '>
        <Header/>
        <div className='flex h-full flex-col  justify-center items-center' >
        <Outlet/>
            </div>  
        <Footer/>
   </div>
  )
}

export default ChooseInsurancePage