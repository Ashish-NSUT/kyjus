import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {getUserEnrolledCourses} from "../../services/operations/profileApi"
import CourseProgess from './CourseProgess';

export default function EnrolledCourses() {

    const {token} = useSelector(state => state.auth);
    const [enrolledCourses,setEnrolledCourses] = useState([1,2,3]);

    const getEnrolledCourses = async () =>{
        try {
            const response = await getUserEnrolledCourses(token);
            setEnrolledCourses(response);
            console.log(response);
            
        }catch(err) {
            console.log("error while getting Enrolled Courses: ",err);
        }
    }

    useEffect(() => {
        getEnrolledCourses();
    }, [])
    

  return (
    <div className='w-11/12 mx-auto text-richblack-25 font-inter overflow-y-auto'>
      <div className='flex py-6 pb-14'>
        <h1 className='text-3xl'>
            Enrolled Courses
        </h1>
      </div>

      <div className='flex flex-col rounded-lg overflow-hidden border-richblack-700 border-[1px]'>
        <div className='flex bg-richblack-700 justify-between p-4 text-sm text-richblack-50'>
            <div className='text-start w-[45%]'>
                Course Name
            </div>
            <div className='text-start w-[20%]'>
                Durations
            </div>
            <div className='text-start w-[35%]'>
                Progress
            </div>
        </div>

        {
            enrolledCourses.map((course) => {
                return (
                    <CourseProgess key={course._id} data={course} />
                )

            })
        }
        
      </div>
    </div>
  )
}
