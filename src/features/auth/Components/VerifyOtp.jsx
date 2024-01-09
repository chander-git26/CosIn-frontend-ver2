import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React, { useState, useEffect } from 'react'
import { userEmailLoginApi, userMobileLoginApi, validateOtpApi } from '../UserloginApi';





const VerifyOtp = ({ setLoginsuccess, otpSentTo }) => {
  

  const [otpErrorText, setOtpErrorText] = useState()

  const [resendTimer, setResendTimer] = useState(20);
  console.log(otpSentTo);



  
  const handleResendOtp = () => {
    if(otpSentTo.mobile){
      console.log('Hello');
      userMobileLoginApi(otpSentTo)
      setResendTimer(20);
    }
    if(otpSentTo.email){
      userEmailLoginApi(otpSentTo)
      setResendTimer(20);

    }
    
  };
  
  useEffect(() => {
    let timerId;

    if (resendTimer > 0) {
      timerId = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
    }

    return () => clearTimeout(timerId);
   }, [resendTimer]);
  return (
    <div>


      <Formik
        initialValues={{
          otp: '',

        }}
        validationSchema={Yup.object({
          otp: Yup.string().required('OTP required')

        })}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          const responce = await validateOtpApi({...otpSentTo,...values});
          console.log(responce);
          responce.status===200&&setLoginsuccess(responce.data)
          responce.status===401&&setOtpErrorText("OTP Incorrect")
          
        }}
      >
        {formik => (
          <Form className='  flex flex-col p-5  gap-2'>
            <h1 className='text-lg font-semibold text-gray-600'>Enter OTP</h1>
            <h1 className='text-sm text-gray-400'>OTP set to {otpSentTo?.mobile} {otpSentTo?.email}</h1>
            <div className="flex flex-col my-5 relative  border-b-gray-400">
              <Field id="otp" name="otp" placeholder="Enter OTP" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-xs" />
              {formik.touched.otp && formik.errors.otp ? (
                <div className='text-xs mt-2 text-accent-hover' ><i className="bi bi-exclamation-circle"></i> {formik.errors.otp}</div>
              ) : 
              (
                otpErrorText ? (
                  <div className='text-xs mt-2 text-right text-red-600' ><i className="bi bi-exclamation-circle"></i> {otpErrorText}</div>
                ) : null
              )
              }
              

            </div>

            <button type="submit" className='bg-accent font-medium  p-3 px-4 hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Verify OTP</button>
            {/* <button className='text-sm text-center py-2 ' onClick={()=>{setLogintype('email')}}> <span className='text-gray-500 font-semibold text-xs  hover:text-accent-hover '> {"(or)"} Login with E-Mail</span></button> */}
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={resendTimer > 0}
              className={`text-sm text-center py-2 ${resendTimer > 0 ?"":"text-accent-hover hover:cursor-pointer font-bold"}`}
            >
              Resend OTP {resendTimer > 0 && `in ${resendTimer}s`}
            </button>
          </Form>)}
      </Formik>
    </div>
  )
}

export default VerifyOtp