import React, { useState, useEffect } from 'react'
import AuthButtons from './AuthButtons';
import { useForm } from 'react-hook-form';
import CountryCode from '../../data/countrycode.json'

export default function ContactForm(props) {
    const { heading, subhead } = props;


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstName: "",
                lastName: "",
                message: "",
                contact: "",
            })
        }


    }, [isSubmitSuccessful, reset])


    const SubmitForm = async (data) => {

        try{
            const response = {status: "OK"};

        }catch(err){
            console.log(err);
        }

    }


    return (
        <div className='flex flex-col gap-8 max-w-[650px] md:min-w-[650px] md:w-[60%] mx-auto md:p-8'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl text-richblack-5 font-semibold'>
                    {heading}
                </h1>
                <p>
                    {subhead}
                </p>
            </div>

            <form
                onSubmit={handleSubmit(SubmitForm)}
                className='flex flex-col items-center justify-center gap-4'>
                <div className='flex gap-5 text-start w-full'>
                    <div className='w-full'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">First Name <span className="text-pink-200">*</span> </label>
                        <input type="firstname" id="firstname" name="firstName" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter First Name" 
                    {...register("firstName", {required:true})} />
                    {
                        errors.firstName && (
                            <span> Enter First Name </span>
                        )
                    }
                    </div>

                    <div className='w-full'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Last Name <span className="text-pink-200">*</span></label>
                        <input type="lastname" id="lastname" name="lastname" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Last Name" 
                    {...register("lastName")} />
                    </div>
                </div>
                {/* email  */}
                <div className='w-full text-start'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Email Address <span className="text-pink-200">*</span></label>
                    <input type="email" id="email" name="email" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-3 " placeholder="Enter Email.." {...register("email", {required: true})} />
                     {
                        errors.email && (
                            <span>Please Enter Email</span>
                        )
                     }
                </div>

                {/* contact  */}

                <div className='w-full text-start'>
                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Phone Number <span className="text-pink-200">*</span></label>
                    <div className="flex gap-5">
                        <select type="tel" id="code" name="code" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block p-3 w-[20%] text-ellipsis" {...register("countrycode", {required:true})} >
                            {
                                CountryCode.map((ele, index)=>{
                                    return (
                                        <option key={index} value={ele.code}>{ele.code}-{ele.country}</option>
                                    )
                                })
                            }
                         </select>


                        <input type="tel" id="contact" name="number" pattern="[0-9]{10}" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-3 " placeholder="12345 67890" 
                         {...register("contact", {
                            required:true,
                            maxLength: {value:10, message:"Invalid Number"},
                            minLength: {value:8, message:"Invalid Number"}})}/>
                            {
                                errors.contact && (
                                    <span>Please enter a valid number</span>
                                )
                            }
                    </div>
                </div>

                {/* text area  */}

                <div className='w-full text-start py-6'>

                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Message <span className="text-pink-200">*</span></label>
                    <textarea name="message" id="message" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block p-3 w-full" placeholder='Enter your message..' cols="30" rows="5" 
                         {...register("message", {required:true})}>
                    </textarea>
                    {
                        errors.message && (
                            <span>Please Enter message</span>
                        )
                    }

                </div>

                <AuthButtons text={"Send Message"} type="submit" />


            </form>

        </div>
    )
}
