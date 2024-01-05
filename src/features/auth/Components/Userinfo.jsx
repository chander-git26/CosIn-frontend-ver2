import React from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';




const Userinfo = () => {
  return (
    <div className={` rounded-xl flex h-[675px] w-[700px] bg-white   `} >
        
        
          <div className='h-400px w-[700px]'>
            <div className=''>

              <Formik
                initialValues={{
                  firstname:'',
                  lastname:'',
                  mobile:'',
                  email:'',
                  dateOfBirth: '',
                  gender: 'male',                  
                  maritalStatus: '',
                

                }}
                validationSchema={Yup.object({
                  firstname: Yup.string()
                  .required(),
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
                    .required('Date of birth required'),
                  
                  maritalStatus: Yup.string()
                    .required(),
                
                })}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  
                  alert(JSON.stringify(values))
                  const temp = {id:userstatus.userId,...values}
                  await postPersonalInfo(temp)
                  onButtonClick("pagetwo")
                }}
              >
                {formik => (


                  <Form className='  flex flex-col p-5  gap-6'>
                    <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Let us get to know you</h1>



                 


                    <div className='flex gap-10'>

                      

                          <div className=" flex flex-col  relative  border-b-gray-400">
                          <label htmlFor="firstname" className={""} >FIRST NAME</label>
                          <Field id="firstname" name="firstname" value={formik.values.firstname} className={formik.touched.firstname && formik.errors.firstname ? "" : ""} placeholder="Enter firstname" {...formik.getFieldProps('firstname')} />
                          {formik.touched.firstname && formik.errors.firstname ? (
                            <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.firstname}</div>
                          ) : null}
                          {/* {formik.touched.firstname && !formik.errors.firstname ? (
                            <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>
                          ) : null} */}
                        </div>


                        
                        <div className=" flex flex-col  relative  border-b-gray-400">
                          <label htmlFor="lastname " className={""}>LASTNAME</label>
                          <Field id="lastname" name="lastname" className={formik.touched.lastname && formik.errors.lastname ? "" : ""} placeholder="Enter Lastname"  {...formik.getFieldProps('lastname')} />
                          {formik.touched.lastname && formik.errors.lastname ? (
                            <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.lastname}</div>
                          ) : null}
                          {/* {formik.touched.lastname && !formik.errors.lastname ? (
                            <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>

                          ) : null} */}
                        </div>
                  </div>
                  

                  <div className=" flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="email" className={""}  >E-Mail</label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Yourmail@xyz.com"
                      type="email"
                      className={formik.touched.email && formik.errors.email ? "" : ""}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.email}</div>
                    ) : null}
                    {/* {formik.touched.email && !formik.errors.email ? (
                      <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>
                    ) : null} */}

                  </div>


                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="mobile" className={""}>PHONE</label>
                    <Field id="mobile" name="mobile" placeholder="Enter your phone number" type='text' className={formik.touched.mobile && formik.errors.mobile ? "" : ""} />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                    ) : null}
                  
                  </div>

                  <div className=" flex flex-row gap-5  relative h-6 border-b-gray-400">

                    <div id="my-radio-group" className={""}>Gender :</div>
                    <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
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
                    {formik.touched.gender && formik.errors.gender ? (
                      <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.gender}</div>
                    ) : null}

                  </div>


                  <div className=" flex flex-col mb-4 relative  border-b-gray-400">


                    <div id="my-radio-group" className={""}>Date of Birth</div>
                    <Field name="dateOfBirth"  type='date'    className={formik.touched.dateOfBirth && formik.errors.dateOfBirth ? "" : ""}  {...formik.getFieldProps('dateOfBirth')}>
            
                    </Field>
              
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                      <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.dateOfBirth}</div>
                    ) : null}
                  </div>


                  <div className=" flex flex-row gap-5 mb-4 relative h-6 border-b-gray-400">

                    <div id="my-radio-group" className={""}>Marital Status :</div>
                    <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
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
                      <div className=""><i className="bi bi-exclamation-circle"></i> {formik.errors.maritalStatus}</div>
                    ) : null}

                  </div>

                  
              


                    <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg   hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Next</button>
                  </Form>)}
              </Formik>
            </div>

          </div>
        </div>
    
  );
    
  
}

export default Userinfo