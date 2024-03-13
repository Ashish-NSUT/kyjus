import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import SmallBtns from '../common/SmallBtns';
import { useForm } from 'react-hook-form';

const gender = [
  "Male",
  "Female",
  "Other",
]

export default function Setting() {

  const { user } = useSelector(state => state.profile);
  const navigate = useNavigate();


  // profile form 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      contact: "",
    }
  });

  // password form 
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
    formState: { errors: errors2, isSubmitSuccessful: isSubmitSuccessful2, isDirty: isDirty2 },
  } = useForm({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    }
  });

  useEffect(() => {

    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        contact: "",
      })
    }

    if (isSubmitSuccessful2) {
      reset2({
        oldPassword: "",
        newPassword: "",
      })
    }

  }, [isSubmitSuccessful, reset, isSubmitSuccessful2, reset2])


  const submitForm = (e) => {

    console.log("submit");

  }

  return (
    <div className='w-11/12 mx-auto text-richblack-25 font-inter overflow-y-auto'>
      <div className='flex py-6 pb-14'>
        <h1 className='text-3xl'>
          My Profile
        </h1>
      </div>

      <div className='flex flex-col gap-8 md:w-9/12 mx-auto items-center pb-10'>
        <div className='flex items-center w-full gap-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg'>

          <img
            className='aspect-square rounded-full w-[80px]'
            src={user?.image} alt="" />

          <div className='text-start flex flex-col gap-4'>
            <p className='text-lg font-semibold'>Change Profie Picture</p>
            <div className='flex gap-3'>
              <button><SmallBtns text={"Upload"} color={1} /> </button>
              <button>
                <SmallBtns text={"Remove"} color={0} />
              </button>
            </div>
          </div>
        </div>


        <form className='grid grid-cols-1 md:grid-cols-2 w-full place-content-center gap-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg'
          onSubmit={handleSubmit(submitForm)}>

          <div className='flex justify-between w-full items-center md:col-span-2'>
            <h2 className='text-lg font-semibold'>Personal Details</h2>

          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2 text-richblack-5'>
            <p>First Name</p>
            <input type="text" id="firstname" name="firstName" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Enter First Name"   {...register("firstName")} />
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>Last Name</p>
            <input type="text" id="lastname" name="lastname" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Enter Last Name"   {...register("lastName")} />
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>Date of Birth</p>
            <input type="date" id="DOB" name="dateOfBirth" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              {...register("dateOfBirth")} />
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>Gender</p>
            <select type="text" id="gender" name="gender" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              {...register("gender")}>
              {
                gender.map((ele, index) => {
                  return (
                    <option key={index} value={ele}>{ele}</option>
                  )
                })
              }
            </select>
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>Email</p>
            <input type="email" id="email" name="email" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Enter Email"   {...register("email")} />
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>Contact Number</p>
            <input type="contact" id="contact" name="contact" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Contact Number"
              {...register("contact")} />
          </div>

          <div className={`${isDirty ? "flex" : "hidden"} justify-end md:col-span-2 gap-4 pt-4`}>
            <button type='submit'>

              <SmallBtns type="submit" text={"Save"} color={1} />
            </button>

            <button type="reset" onClick={() => {
              console.log("Cancel clicked")
              reset({
                email: "",
                firstName: "",
                lastName: "",
                gender: "",
                dateOfBirth: "",
                contact: "",
              })
            }} >

              <SmallBtns text={"Cancel"} color={0} />
            </button>

          </div>

        </form>



        <form className='grid grid-cols-1 md:grid-cols-2 w-full place-content-center gap-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg'>

          <div className='flex justify-between w-full items-center md:col-span-2'>
            <h2 className='text-lg font-semibold'>Change Password</h2>

          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2 text-richblack-5'>
            <p>Current Password</p>
            <input type="password" id="oldpassword" name="oldpassword" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Enter old password" {...register2("oldPassword")} />
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p>New Password</p>
            <input type="password" id="newpassword" name="newpassword" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "
              placeholder="Enter new password" {...register2("newPassword")} />
          </div>

          <div className={`${isDirty2 ? "flex" : "hidden"} justify-end md:col-span-2 gap-4 pt-4`}>
            <button type='submit'>

              <SmallBtns type="submit" text={"Save"} color={1} />
            </button>

            <button type="reset" onClick={() => {
              console.log("Cancel clicked")
              reset2({
                oldPassword: "",
                newPassword: "",
              })
            }} >

              <SmallBtns text={"Cancel"} color={0} />
            </button>

          </div>


        </form>


        <div className="flex bg-pink-900 items-start gap-5 p-6 w-full rounded-lg">
          <div className='bg-pink-700 p-3 rounded-full'>
            <RiDeleteBin6Line className='text-pink-200 text-xl ' />
          </div>

          <div className='text-pink-25 flex flex-col gap-2 items-start'>
            <h3 className='text-lg text-pink-5 font-semibold'>Delete Account</h3>
            <div>
              <p>Would you like to delete account?</p>
              <p className='w-[80%]'>This account contains Paid Courses. Deleting your account will remove
                all the contain associated with it.</p>
            </div>

            <button className='text-pink-300 italic text-md'>I want to delete my account.</button>
          </div>

        </div>





      </div>

    </div>
  )
}
