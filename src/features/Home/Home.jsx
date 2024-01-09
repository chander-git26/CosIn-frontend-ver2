import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../Components/Banner'
import Footer from '../../components/Footer'

const Home = () => {
  const [ displayLogin, setDisplayLogin ] = useState(false)

  // displayLogin?document.body.style.overflow='hidden':document.body.style.overflow='auto'

  

  return (
   <>
   <div className='h-screen  '>
   <Header setDisplayLogin={setDisplayLogin} displayLogin={displayLogin}/>
   <Banner setDisplayLogin={setDisplayLogin}/>
    {/* {displayLogin?<Login loginToggle={setDisplayLogin}/>:null}  */}
    {/* section -1 */}

    <div className='h-screen w-full bg-green-100'>

    </div>
    <div className='h-screen w-full bg-red-100'>

    </div>
    <div className='h-screen w-full bg-yellow-100'>

    </div>
    <div className='h-screen w-full bg-blue-100'>

    </div>
    <Footer/>
    {/* section -2 */}
    {/* section -3 */}
    {/* section -4 */}
    {/* section -5 */}
   </div>
   </>
  )
}

export default Home