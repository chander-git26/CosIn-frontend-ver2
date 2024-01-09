import axios from "axios"
const MOBILE_OTP_GENERATE_URL = "http://localhost:8280/user/generateOtpForMobile"
const EMAIL_OTP_GENERATE_URL = "http://localhost:8280/user/generateOtpForEmail"
const VALIDATE_OTP_URL = "http://localhost:8280/login/validateOtp"


const config = {
    headers:{
        'Content-Type': 'application/json',

    }
}

export const  userMobileLoginApi = async(body) =>{

    try{

        const res =  await axios.post(MOBILE_OTP_GENERATE_URL,body,config).then(res=>res)
         return res
    } catch(err){
        console.log(err);
    }
}
export const  userEmailLoginApi = async(body) =>{
    const res =  await axios.post(EMAIL_OTP_GENERATE_URL,body,config).then(res=>res)
     return res

}
export const  validateOtpApi = async(body) =>{
    try{

        const res =  await axios.post(VALIDATE_OTP_URL,body,config).then(res=>res)
        return res
    }catch(err){
        return err.response
    }

}