import React from 'react'
import { Link } from 'react-router-dom'

const ChoosePolicies = () => {
  return (
    <div className='flex h-full flex-col  justify-center items-center' >
        <div className='flex  gap-4'>
            <Link to={'/insurance/healthInsurance'}>
            <div>Health insurance</div>
            </Link>
            <div>Life Insurance</div>
        </div>
        <div className='flex gap-4'>
            <div>Automobile insurance</div>
            <div>Life Insurance</div>
        </div>
    </div>
  )
}

export default ChoosePolicies