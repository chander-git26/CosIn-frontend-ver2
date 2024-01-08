import axios from "axios"
const MOBILE_OTP_GENERATE_URL = "http://localhost:8280/user/generateOtpForMobile"
const EMAIL_OTP_GENERATE_URL = "http://localhost:8280/user/generateOtpForEmail"
const VALIDATE_OTP_URL = "http://localhost:8280/login/validateOtp"

export const  userMobileLoginApi = async(body) =>{
    const res =  await axios.post(MOBILE_OTP_GENERATE_URL,
        body
        ).then(res=>res)
     return res

}
export const  userEmailLoginApi = async(body) =>{
    const res =  await axios.post(MOBILE_OTP_GENERATE_URL,
        body
        ).then(res=>res)
     return res

}
export const  validateOtpApi = async(body) =>{
    const res =  await axios.post(VALIDATE_OTP_URL,
        body
        ).then(res=>res)
     return res

}