import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChooseInsurancePage from './pages/ChooseInsurancePage'
import ChoosePolicies from './features/InsurancePolicies/ChoosePolicies'
import HealthInsurance from './features/InsurancePolicies/HealthInsurance/HealthInsurance'




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path:'/insurance',
    element:<ChooseInsurancePage/>,
    children:[
      {
        path:'',
        element:<ChoosePolicies/>
      },
      {
        path:'/insurance/healthInsurance',
        element:<HealthInsurance/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App