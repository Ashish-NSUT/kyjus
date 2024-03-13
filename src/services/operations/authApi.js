import {apiConnector} from '../apiConnector'
import { setLoading,setToken } from '../../slices/AuthSlice'
import { setUser } from '../../slices/profileSlice'
import {endpoints} from '../api'
import toast from 'react-hot-toast';

const {
    SENDOTP_API,
    SIGNUP_API,
    LOGIN_API,
    RESETPASSTOKEN_API,
    RESETPASSWORD_API,
  } = endpoints


export function login(email, password, navigate) {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const toastId = toast.loading("Loading...")
        try{
            const response = await apiConnector("POST",LOGIN_API, {email, password});
            console.log("Login",response);

            if(response.status === true) {
                throw new Error(response.data.message);
            }
            toast.success("Login successfull");

            dispatch(setToken(response.data.token));
            dispatch(setUser(response.data.user));
            console.log(response.data.user);

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));

            
            navigate("/dashboard/my-profile");
            
        }catch(err){
            console.log("error while login",err);
            toast.error("Login Failed");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function sendOtp(email, navigate){

        return async(dispatch) =>{
            const toastId = toast.loading("Loading...");
            dispatch(setLoading(true));
            try{
                const response = await apiConnector("POST", SENDOTP_API, {email});
                console.log(response);

                if(!response.data.success) {
                    throw new Error(response.data.message);
                }

                toast.success("OTP Sent!")
                navigate("/verify-email");


            }catch(err) {
                console.log("Could not Send OTP");
                toast.error("Could not Send OTP");
            }

            dispatch(setLoading(false))
            toast.dismiss(toastId);
        }

}


export function getPasswordResetToken(email, setEmailSent){
    return async(dispatch) =>{
        dispatch(setLoading(true));

        try{
            const response = await apiConnector("POST", RESETPASSTOKEN_API, {email})
            console.log("Respone of reset Token..", response);

            if(!response.data.success) {
                throw new Error(response.data.message);
            }
            
            toast.success("Reset Link Sent!")
            setEmailSent(true);
        }catch(e){
            console.log("Reset Token Error");
            toast.error("Reset Token Error")

        }

        dispatch(setLoading(false));
    }
}


export function resetPassword(password, token) {
    return async(dispatch) => {
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", RESETPASSWORD_API, {newPassword:password, token});

            console.log(response);

            if(!response.data.success) {
                throw new Error(response.data.message); 
            }

            toast.success("Password Resetted Successfully");

        }catch(err) {
            console.log("Password Reset Error");
            toast.error("Password could not be resetted")
        }

        dispatch(setLoading(false));
    }
}


export function signup(firstName, lastName, email, password,contactNumber, otp, accountType,navigate) {
    return async(dispatch)=>{
        dispatch(setLoading(true));
        try{
            const response = await apiConnector("POST", SIGNUP_API, {firstName, lastName, email, password,contactNumber, otp, accountType});

            console.log(response);
            
            if(!response.data.success) {
                throw new Error(response.data.message); 
            }

            toast.success("Account Created Successfully");
            navigate("/login")
        }catch(err) {
            console.log("Account Creation Error: ", err);
            toast.error("Account could not be Created")
        }
        dispatch(setLoading(false));
    }
}


export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.success("Account was successfully logged out");
        navigate("/");
    }
}