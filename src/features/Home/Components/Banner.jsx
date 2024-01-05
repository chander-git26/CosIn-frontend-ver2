import React from 'react'

const Banner = ({loginToggle}) => {
    return (
        <div className=' flex  justify-center'>
            <div className='text-center mt-14 '>
                <h1 className='text-7xl py-3 leading-snug text-gray-900'>All things Insurance,<br/>
                    right here.</h1>
                <h5 className='text-lg text-gray-600 font-semibold leading-snug'>Built for a growing India.
                </h5>
                <button onClick={()=>loginToggle(prev=>!prev)} className='bg-accent font-semibold  p-4 px-5 rounded-md my-5 text-sm hover:bg-accent-hover hover:shadow-2xl  hover:shadow-accent  duration-200   hover:text-white'>Get Started</button>

            </div>
        </div>
    )
}

export default Banner