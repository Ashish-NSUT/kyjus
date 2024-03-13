import React, { useEffect, useState } from 'react'
import AuthButtons from '../components/common/AuthButtons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signup, sendOtp } from "../services/operations/authApi"
import OTPInput from 'react-otp-input'
import { FaArrowLeft } from "react-icons/fa"


export default function VerifyEmail() {
    const { signupData, loading } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [otp, setOtp] = useState(null);


    useEffect(() => {
        if (!signupData) {
            navigate("/signup");
        }

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password, contactNumber, accountType } = signupData;

        dispatch(signup(firstName, lastName, email, password, contactNumber, otp, accountType, navigate));

    }

    return (
        <div>
            {
                loading ? (
                    <div>Loading ...</div>
                ) :
                    <div className='flex flex-col gap-9 justify-center mt-[100px] text-richblack-5 max-w-[390px] mx-auto w-11/12'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold text-center md:text-start'>
                                Verify Email
                            </h1>
                            <p className='text-richblack-100 text-center md:text-start'>
                                A verification code has been sent to you. Enter the code below
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-9">

                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => <input {...props} className="inputStyle bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-lg font-semibold rounded-lg
                            focus:ring-blue-500 focus:border-blue-500"/>}
                                containerStyle="w-full flex gap-5 place-items-center"
                                placeholder="------"
                            />


                            <div className="w-full" >
                                <AuthButtons text={"Verify Email"} type="submit" />
                                <div className="flex justify-between">
                                    <Link to={"/signup"}><div className='text-sm mt-3 p-3 flex items-center gap-2'>
                                        <FaArrowLeft />
                                        <p>Back to Signup</p>
                                    </div></Link>
                                    <div className='text-sm mt-3 p-3 cursor-pointer text-blue-100' onClick={() => dispatch(sendOtp(signupData.email, navigate))}>Resend OTP</div>
                                </div>
                            </div>


                        </form>

                    </div>

            }
        </div>
    )
}
