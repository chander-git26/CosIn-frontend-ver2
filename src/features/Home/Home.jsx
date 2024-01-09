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
    <div className="hs-dropdown relative inline-flex">
  <button id="hs-dropdown-basic" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    Actions
    <svg className="hs-dropdown-open:rotate-180 w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-basic">
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Newsletter
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Purchases
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Downloads
    </a>
    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
      Team Account
    </a>
  </div>
</div>

                

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