import React from 'react'
import logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../assets/Images/TimelineImage.png"

export default function TimelineSection() {
  return (
    <div className="flex gap-[76px] justify-evenly w-full">
        {/* Timeline */}
        <div className="flex flex-col gap-8">
            <div className="flex gap-6 py-4 px-3">
                <div className="h-[50px] w-[50px] flex items-center bg-white justify-center rounded-full shadow-md">
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <div className='text-lg text-richblack-800 font-semibold'>
                        Leadership
                    </div>
                    <p>
                        Fully committed to the success company
                    </p>
                </div>
            </div>
            <div className="flex gap-6 py-4 px-3">
                <div className="h-[50px] w-[50px] flex items-center bg-white justify-center rounded-full shadow-md">
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <div className='text-lg text-richblack-800 font-semibold'>
                    Responsibility
                    </div>
                    <p>
                    Students will always be our top priority
                    </p>
                </div>
            </div>
            <div className="flex gap-6 py-4 px-3">
                <div className="h-[50px] w-[50px] flex items-center bg-white justify-center rounded-full shadow-md">
                    <img src={logo3} alt="" />
                </div>
                <div>
                    <div className='text-lg text-richblack-800 font-semibold'>
                    Flexibility
                    </div>
                    <p>
                    The ability to switch is an important skills
                    </p>
                </div>
            </div>
            <div className="flex gap-6 py-4 px-3">
                <div className="h-[50px] w-[50px] flex items-center bg-white justify-center rounded-full shadow-md">
                    <img src={logo4} alt="" />
                </div>
                <div>
                    <div className='text-lg text-richblack-800 font-semibold'>
                    Solve the problem
                    </div>
                    <p>
                    Code your way to a solution
                    </p>
                </div>
            </div>
            
        </div>

        {/* Image  */}

        <div className='relative shadow-[20px_20px_0px_0px] shadow-white hidden md:block'>
            <img src={timelineImage} alt="" />

            <div className='absolute flex gap-14 text-white bg-[#014A32] bottom-[-50px] left-[80px] p-10 justify-center'>
                <div className='flex gap-6 items-center'>
                    <div className='text-4xl font-bold'>10</div>
                    <div className='text-caribbeangreen-300'>YEARS <br/> EXPERIENCES</div>
                </div>
                <div className='w-[1px] bg-[#037957]'></div>
                <div className='flex gap-6 items-center'>
                    <div className='text-4xl font-bold'>250</div>
                    <div className='text-caribbeangreen-300'>TYPES OF<br/> COURSES</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
