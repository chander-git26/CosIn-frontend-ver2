import React from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';




const Userinfo = ( {loginToggle}) => {




    return (
        <div className={` relative rounded-xl flex  w-[900px] bg-white  justify-center  `} >

            <div className='w-full px-4'>

                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        mobile: '',
                        email: '',
                        dateOfBirth: '',
                        gender: 'male',
                        maritalStatus: '',


                    }}
                    validationSchema={Yup.object({
                        firstname: Yup.string()
                            .required("Required"),
                        lastname: Yup.string()
                            .required(),
                        email: Yup.string().email('Invalid email address').required('E-mail is required'),
                        mobile: Yup.string().required('Phone number is Required').min(10, 'Phone number is not valid').max(10, 'Phone number is not valid'),

                        gender: Yup.string()
                            .required(),
                        dateOfBirth: Yup.date().nullable()
                            .test('dob', 'Should be Older than 18', function (value, ctx) {
                                const dob = new Date(value);
                                const validDate = new Date();
                                const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
                                return !valid ? ctx.createError() : valid;
                            })
                            .required('Date of birth required').typeError('Date of birth required'),

                        maritalStatus: Yup.string()
                            .required(),

                    })}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));

                        alert(JSON.stringify(values))
                        const temp = { id: userstatus.userId, ...values }
                        await postPersonalInfo(temp)
                        onButtonClick("pagetwo")
                    }}
                >
                    {formik => (


                        <Form className='  flex flex-col p-5 w-full  gap-10 justify-center items-center'>
                            <h1 className='text-center text-2xl my-6 text-gray-600 font-medium border-b-2 pb-2 self-center px-4 border-b-accent-hover '>Let us know more about you</h1>
                        
                            <div className='flex justify-between w-full '>

                                <div className='flex flex-col flex-1 gap-10 border-r-2 pr-5 border-accent  '>
                                    <div className='flex gap-5'>

                                        <div className="flex flex-col  relative  border-b-gray-400">
                                        <label htmlFor="firstname " className="font-medium text-gray-600 px-2">First name</label>

                                            <Field id="firstname" name="firstname" placeholder="Enter your Firstname" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-sm" />
                                            {formik.touched.firstname && formik.errors.firstname ? (
                                                <div className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0' ><i className="bi bi-exclamation-circle"></i> {formik.errors.firstname}</div>
                                            ) : null}

                                        </div>


                                        <div className=" flex flex-col   relative  border-b-gray-400">
                                            <label htmlFor="lastname "  className="font-medium text-gray-600 px-2">Last name</label>
                                            <Field id="lastname" name="lastname"  className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-sm"  placeholder="Enter Lastname"  {...formik.getFieldProps('lastname')} />
                                            {formik.touched.lastname && formik.errors.lastname ? (
                                                <div className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0'><i className="bi bi-exclamation-circle"></i> {formik.errors.lastname}</div>
                                            ) : null}

                                        </div>
                                    </div>

                                    <div className=" flex flex-col  relative  border-b-gray-400">
                                        <label htmlFor="email"  className="font-medium text-gray-600 px-2" >E-Mail</label>
                                        <Field
                                            id="email"
                                            name="email"
                                            placeholder="Yourmail@xyz.com"
                                            type="email"
                                            className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-sm" 
                                            {...formik.getFieldProps('email')}
                                        />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0'><i className="bi bi-exclamation-circle"></i> {formik.errors.email}</div>
                                        ) : null}

                                    </div>
                                    <div className="flex flex-col  relative  border-b-gray-400">
                                        <label htmlFor="mobile"  className="font-medium text-gray-600 px-2">Mobile</label>
                                        <Field id="mobile" name="mobile" placeholder="Enter your phone number" type='text' className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-sm" />
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0'><i className="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                                        ) : null}

                                    </div>



                                </div>


                                <div className='flex flex-col gap-10 flex-1  pl-5'>



                                    <div className=" flex flex-col mb-4 relative  border-b-gray-400">


                                        <div id="my-radio-group"  className="font-medium text-gray-600 px-2">Date of Birth</div>
                                        {/* <Field   type='date'  >

                                        </Field> */}
                                        <InputMask
                                        name="dateOfBirth" 
                                        {...formik.getFieldProps('dateOfBirth')}
                                            className="focus:outline-none focus:border-b-2 border-b-2 focus:border-accent-hover text-sm py-2 px-2  flex-1  placeholder:text-sm"
                                            mask="99/99/9999"
                                            maskPlaceholder="mm/dd/YYYY"
                                            placeholder="MM/DD/YYYY"
                                        />
                                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                                            <div  className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0'><i className="bi bi-exclamation-circle"></i> {formik.errors.dateOfBirth}</div>
                                        ) : null}
                                    </div>

                                    

                                    
                                    <div className=" flex flex-row gap-2   relative h-6 border-b-gray-400">
                                        <div id="my-radio-group"  className="font-medium text-gray-600 px-2">Gender :</div>
                                        <div role="group" className="flex flex-row gap-4" aria-labelledby="my-radio-group">
                                            <label className={""}>
                                                <Field type="radio" name="gender" value="male" /> {" "}
                                                Male
                                            </label>
                                            <label className={""}>
                                                <Field type="radio" name="gender" value="female" /> {" "}
                                                Female
                                            </label>
                                            <label className={""}  >
                                                <Field type="radio" name="gender" value="other" /> {" "}
                                                Other
                                            </label>
                                        </div>
                                  

                                    </div>

                                    <div className=" flex flex-row gap-5 mb-4 relative h-6 border-b-gray-400">
                                        <div id="my-radio-group"  className="font-medium text-gray-600 px-2" >Marital Status :</div>
                                        <div role="group" className="flex flex-row gap-4" aria-labelledby="my-radio-group">
                                            <label className={""}>
                                                <Field type="radio" name="maritalStatus" value="married" /> {" "}
                                                Married
                                            </label>
                                            <label className={""}>
                                                <Field type="radio" name="maritalStatus" value="single" /> {" "}
                                                Single
                                            </label>

                                        </div>
                                        {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                                            <div  className='text-xs mt-2 text-accent-hover absolute -bottom-6 left-0'><i className="bi bi-exclamation-circle"></i> {formik.errors.maritalStatus}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className='bg-accent font-medium  p-3 px-8 hover:bg-accent-hover   w-auto rounded-md hover:text-white transition-all	 duration-200   text-sm'>Register Now</button>

                        </Form>)}
                </Formik>
            </div>
            <button className='text-gray-600 absolute top-4 right-4 text-2xl' onClick={()=>loginToggle(prev=>!prev)}><i class="bi bi-x"></i></button>


        </div>

    );


}

export default Userinfo