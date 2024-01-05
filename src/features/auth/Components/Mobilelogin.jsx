import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React from 'react'
 

function Mobilelogin({setLogintype}) {
  return (
    <div>
   
        


        <Formik
              initialValues={{
                mobile: '',
            
              }}
              validationSchema={Yup.object({
               
                mobile: Yup.string().required('Phone number is Required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').min(10, 'Phone number is not valid').max(10, 'Phone number is not valid'),

              })}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                 console.log(values);
               
              }}
            >
              {formik => (
                <Form className='  flex flex-col p-5  gap-2'>
                       <h1 className='text-lg font-semibold text-gray-600'>Aadhar linked phone number</h1>
                  <div className="flex flex-col my-5 relative  border-b-gray-400">
                    {/* <label htmlFor="mobile" className={inpLableSty}>PHONE</label> */}
                    <Field id="mobile" name="mobile" placeholder="Enter your phone number" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-xs" />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div  className='text-xs text-accent-hover' ><i className="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                    ) : null}
                 
                  </div>

                  <button type="submit" className='bg-accent font-medium  p-3 px-4 hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Get OTP</button>
                  <button className='text-sm text-center py-2 ' onClick={()=>{setLogintype('email')}}> <span className='text-gray-600 font-semibold text-xs  hover:text-accent-hover '>  Login with E-Mail</span></button>

                </Form>)}
            </Formik>
    </div>
  )
}

export default Mobilelogin