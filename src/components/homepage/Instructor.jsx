import React from 'react'
import Highlight from './Highlight'
import instructor from "../../assets/Images/Instructor.png"
import Button from './Button'
import { FaArrowRight } from 'react-icons/fa'

export default function Instructor() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-24 py-[90px] items-center justify-center w-full">
        <div className="flex justify-end md:w-[50%] ">
            <img src={instructor} alt="" className="shadow-[-20px_-20px_0px_0px] shadow-white"/>
        </div>
        <div className="flex gap-3 flex-col text-white items-start md:w-[50%]">
            <h1 className="text-4xl font-semibold md:w-[30%]">
                Become an 
                <Highlight text={" instructor"}/>
            </h1>
            <p className="md:w-[65%]">
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>
            <div className='pt-14'>
                <Button active={true} linkto={"/signup"}>
                    <div className="flex gap-2 items-center">
                        Start Teaching Today
                        <FaArrowRight/>
                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}
