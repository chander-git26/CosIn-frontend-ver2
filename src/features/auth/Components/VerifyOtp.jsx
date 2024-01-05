import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React from 'react'





const VerifyOtp = ({setLoginsuccess}) => {
  return (
    <div>
     

     <Formik
              initialValues={{
                otp: '',
            
              }}
              validationSchema={Yup.object({
               otp:Yup.string().required('OTP required')

              })}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                 console.log(values);
                 
                 setLoginsuccess("success")
              }}
            >
              {formik => (
                <Form className='  flex flex-col p-5  gap-2'>
                       <h1 className='text-lg font-semibold text-gray-600'>Enter OTP</h1>
                  <div className="flex flex-col my-5 relative  border-b-gray-400">
                    <Field id="otp" name="otp" placeholder="Enter OTP" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-xs" />
                    {formik.touched.otp && formik.errors.otp ? (
                      <div  className='text-xs text-accent-hover' ><i className="bi bi-exclamation-circle"></i> {formik.errors.otp}</div>
                    ) : null}
                 
                  </div>

                  <button type="submit" className='bg-accent font-medium  p-3 px-4 hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Verify OTP</button>
                  {/* <button className='text-sm text-center py-2 ' onClick={()=>{setLogintype('email')}}> <span className='text-gray-500 font-semibold text-xs  hover:text-accent-hover '> {"(or)"} Login with E-Mail</span></button> */}

                </Form>)}
            </Formik>
    </div>
  )
}

export default VerifyOtp