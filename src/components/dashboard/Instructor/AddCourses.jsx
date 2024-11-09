import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CourseInfo from './courseInfo/CourseInfo';
import CourseBuilder from './CourseBuilder/CourseBuilder';
import Publish from './Publish';
import { FaCheck } from "react-icons/fa";
import { useSelector } from 'react-redux';


export default function AddCourses() {


  const { step } = useSelector((state) => state.addCourse);

  const steps = [
    {
      id: 1,
      name: "Course Information"
    },
    {
      id: 2,
      name: "Course Builder"
    },
    {
      id: 3,
      name: "Publish"
    },
  ]


  return (
    <div className="flex w-11/12 flex-col gap-5 md:flex-row-reverse mx-auto lg:ml-5 pt-8 text-richblack-5">
      <Link to="/dashboard/my-courses" className="flex gap-2 items-center text-richblack-300 text-sm md:hidden">
        <FaArrowLeft />
        <p>Back to Dashboard</p>
      </Link>

      <div className="flex flex-col p-4 lg:p-6 gap-4 text-xs text-start bg-richblack-800 rounded-lg border-[1px] border-richblack-700 md:w-[35%] h-fit">

        <h2 className="text-lg font-semibold">
          ⚡Course Upload Tips
        </h2>

        <ul className='flex flex-col gap-3 list-disc pl-6 leading-5'>
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
          <li>Information from the Additional Data section shows up on the course single page.</li>
          <li>Make Announcements to notify any important</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>


      </div>

      <div className=" flex flex-col md:w-[65%]">

        <Link to="/dashboard/my-courses" className="md:flex gap-2 items-center text-richblack-300 text-sm hidden pb-6">
          <FaArrowLeft />
          <p>Back to Dashboard</p>
        </Link>


        <div className="flex pt-6">
          {
            steps.map((ele) => {
              return (
                <div key={ele.id} className='flex flex-col gap-2 w-full items-center relative'>
                  <div className={`border-[2px] z-[1] aspect-square rounded-full w-[40px] justify-center flex items-center
                   font-semibold ${step === ele.id ? "bg-yellow-900 text-yellow-50 border-yellow-50" : "text-richblack-300 bg-richblack-800 border-richblack-700" }
                   ${ele.id < step ? "bg-yellow-50 border-yellow-50 text-richblack-900" : ""} `}>
                      {ele.id >= step ? ele.id : <FaCheck/>}
                  </div>

                  <div className={`${step === ele.id ? "text-richblack-5" : "text-richblack-500"}`}>
                      {ele.name}
                  </div>


                  {
                    steps.length !== ele.id && (
                      <div className="flex justify-start">
                        <div className={`absolute top-[23%] border-[1px] border-dashed 
                        border-spacing-3 ${ele.id < step ? "border-yellow-50" : "border-richblack-700"  } self-end w-full`}></div>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>

        <div>
            <div className={`${step === 1 ? "flex" : "hidden"} flex-col w-full items-end`}>
              <CourseInfo  />
            </div>
            <div className={`${step === 2 ? "block" : "hidden"}`}>
              <CourseBuilder  />
            </div>
            <div className={`${step === 3 ? "block" : "hidden"}`}>
              <Publish  />
            </div>

        </div>




      </div>

    </div>
  )
}
