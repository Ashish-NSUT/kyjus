import React from 'react'
import Button from '../../homepage/Button'
import { IoIosAddCircleOutline } from "react-icons/io";
import MyCourseCard from './MyCourseCard';

export default function MyCourses() {

    const courses = [1,2,3];

    return (
        <div className="w-10/12 mx-auto md:ml-10 flex flex-col text-richblack-25 font-inter overflow-y-auto">
            <div className=' flex py-6 pb-14 justify-between items-center'>
                <h1 className='text-3xl'>
                    My Courses
                </h1>

                <Button linkto={'/dashboard/add-courses'} active={true}>
                    <div className='flex items-center gap-2'>
                        <IoIosAddCircleOutline className='text-xl font-semibold ' />
                        Add
                    </div>
                </Button>
            </div>

            <div className='flex flex-col w-full text-richblack-100 border-[1px] border-richblack-700 rounded-lg'>

                <div className='flex border-b-[1px] border-richblack-700 p-4 text-sm'>
                    <div className='w-[70%]'>
                        COURSES
                    </div>
                    <div className='w-[10%]'>
                        DURATION
                    </div>
                    <div className='w-[10%]'>
                        PRICE
                    </div>
                    <div className='w-[10%]'>
                        ACTIONS
                    </div>
                </div>

                <div className=''>

                    {
                        courses.map((course) => {
                            return (
                                <MyCourseCard />
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}
