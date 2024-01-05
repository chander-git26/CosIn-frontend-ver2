import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React from 'react'
 

function Mobilelogin() {
  return (
    <div>
        <h1>Login with your Mobile OTP</h1>
        


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
                <Form className='  flex flex-col p-5  gap-8'>
                  
                  <div className="flex flex-col  relative  border-b-gray-400">
                    {/* <label htmlFor="mobile" className={inpLableSty}>PHONE</label> */}
                    <Field id="mobile" name="mobile" placeholder="Enter your phone number" type='text'  />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div  ><i className="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                    ) : null}
                 
                  </div>

                  <button type="submit" className='bg-accent font-medium  p-3 px-4 hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Get OTP</button>
                </Form>)}
            </Formik>
    </div>
  )
}

export default Mobilelogin