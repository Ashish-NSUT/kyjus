import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {getPasswordResetToken} from "../services/operations/authApi"
import AuthButtons from '../components/common/AuthButtons';
import {FaArrowLeft} from "react-icons/fa"

export default function ForgotPassword() {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState();

    const {loading} = useSelector((state) => state.auth)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
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
                        {
                            !emailSent ? "Reset your password" :"Check email"
                        }
                    </h1>
                    <p className='text-richblack-100 text-center md:text-start'>
                        {
                            !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery":
                            `We have sent the reset email to ${email}`
                        } 
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-9">
                    {
                        !emailSent && (
                            <label htmlFor="email" className="w-full">
                                <p >Email Address <span className="text-pink-200">*</span></p>
                                <input type="email" required name="email" value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg
                                 focus:ring-blue-500 focus:border-blue-500 block p-3 mt-2"
                                placeholder='Enter Email Address'/>
                            </label>
                        )
                    }
                    <div  className="w-full" >
                        <AuthButtons text={!emailSent ? "Reset Password" : "Resend email"} type="submit"/>
                        <Link to={"/login"}><div className='text-sm mt-3 p-3 flex items-center gap-2'><FaArrowLeft/>
                        <p>Back to login</p></div></Link>
                    </div>


                </form>

            </div>
             
        }
    </div>
  )
}
