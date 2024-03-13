import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AuthButtons from '../components/common/AuthButtons';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft,FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';
import {resetPassword} from "../services/operations/authApi"


export default function UpdatePassword() {
    
    const location = useLocation();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

    const {loading} = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            toast.error("Passswords does not match");
            return;
        }
        const token = location.pathname.split('/').at(-1);
        console.log(token);
        dispatch(resetPassword(password,token));
    }

  return (
    <div>
        {
            loading ?(
                <div>Loading ...</div>
            ):
            <div className='flex flex-col gap-9 justify-center mt-[100px] text-richblack-5 max-w-[360px] mx-auto w-11/12'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold text-center md:text-start'>
                        Choose new password
                    </h1>
                    <p className='text-richblack-100 text-center md:text-start'>
                        Almost done. Enter your new password and youre all set. 
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
                    
                    <div className="flex flex-col gap-5 w-full">
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">New Password <span className="text-pink-200">*</span></label>
                            <input type={`${showPassword ? "password" : "text"}`} id="password" name="password" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm 
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 relative" placeholder="Enter Password.." 
                            required onChange={(e)=> setPassword(e.target.value)} value={password}/>
                            <div className="absolute inset-y-12 right-3 flex items-center text-richblack-300 text-lg" onClick={()=>{setShowPassword(!showPassword)}}>
                                {
                                    showPassword ? <FaRegEye/> : <FaRegEyeSlash/>
                                }
                            </div>
                        </div>
                        
                        <div className='relative'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Confirm Password <span className="text-pink-200">*</span></label>
                            <input type={`${showConfirmPassword ? "password" : "text"}`} id="confirmpassword" name="password" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-3 relative" placeholder="confirm Password.." 
                             required onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword}/>
                            <div className="absolute inset-y-12 right-3 flex items-center text-richblack-300 text-lg" onClick={()=>{setshowConfirmPassword(!showConfirmPassword)}}>
                                {
                                    showConfirmPassword ? <FaRegEye/> : <FaRegEyeSlash/>
                                }
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>
                    <div  className="w-full" >
                        <AuthButtons text={"Reset Password"} type="submit"/>
                        <Link to={"/login"}><div className='text-sm mt-3 p-3 flex items-center gap-2'>
                        <FaArrowLeft/>
                        <p>Back to login</p>
                            </div></Link>
                    </div>
                </form>

            </div>
             
        }
    </div>
  )
}
