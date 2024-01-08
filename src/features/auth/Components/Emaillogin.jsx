import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React from 'react'












const Emaillogin = ({ setLogintype,setOtp }) => {
    return (
        <Formik
            initialValues={{
                email: '',

            }}
            validationSchema={Yup.object({
                email: Yup.string().email('Invalid email address').required('E-mail is required'),
            })}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                console.log(values);
                setOtp('values')

            }}
        >
            {formik => (
                <Form className='  flex flex-col p-5  gap-2'>
                    <h1 className='text-lg font-semibold text-gray-600'>Login through E-mail</h1>
                    <div className="flex flex-col my-5 relative  border-b-gray-400">
                        <Field id="email" name="email" placeholder="Enter your email" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-xs" />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0' ><i className="bi bi-exclamation-circle"></i> {formik.errors.email}</div>
                        ) : null}

                    </div>

                    <button type="submit" className='bg-accent font-medium  p-3 px-4  hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Get OTP</button>
                    <button className='text-sm text-center py-2 '> <span  onClick={() => { setLogintype('mobile') }} className='text-gray-500  hover:text-accent-hover cursor-pointer font-semibold text-xs'> {"(or)"} Login with Mobile OTP</span></button>

                </Form>)}
        </Formik>
    )
}

export default Emaillogin