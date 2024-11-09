import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import EditBtn from './EditBtn';

export default function Profile() {

  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

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

          <div className='w-full text-start'>
            <p className='text-lg font-semibold'>{user?.firstName + ' ' + user?.lastName}</p>
            <p className='text-sm text-richblack-300'>{user?.email}</p>
          </div>

          <div className='hidden md:block'>

            <Link to='/dashboard/setting'>
              <EditBtn />
            </Link>

          </div>

        </div>

        <div className='flex flex-col items-center w-full gap-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg'>

          <div className='flex justify-between w-full items-center col-span-2'>
            <h2 className='text-lg font-semibold'>About</h2>
            <Link to='/dashboard/setting'>
              <EditBtn />
            </Link>
          </div>

          <div className='text-start w-full text-richblack-300' >

            hiii
            {
              user?.about
            }
          </div>

        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 w-full place-content-center gap-6 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg'>

          <div className='flex justify-between w-full items-center md:col-span-2'>
            <h2 className='text-lg font-semibold'>Personal Details</h2>
            <Link to='/dashboard/setting'>
              <EditBtn />
            </Link>

          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p className='text-richblack-300'>First Name</p>
            <p className='font-semibold'>{user?.firstName}</p>
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p className='text-richblack-300'>Last Name</p>
            <p className='font-semibold'>{user?.lastName}</p>
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p className='text-richblack-300'>Email</p>
            <p className='font-semibold'>{user?.email}</p>
          </div>
          <div className='w-full text-start text-sm flex flex-col gap-2'>
            <p className='text-richblack-300'>Contact Number</p>
            <p className='font-semibold'>{user?.contact}</p>
          </div>


        </div>
      </div>

    </div>
  )
}
