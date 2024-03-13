import React from 'react'
import Highlight from './Highlight'
import knowYourProgress from "../../assets/Images/Know_your_progress.svg"
import compareWithOthers from "../../assets/Images/Compare_with_others.svg"
import planYourLesson from "../../assets/Images/Plan_your_lessons.svg"
import Button from './Button'

export default function Language() {
  return (
    <div className='flex flex-col items-center w-11/12 mx-auto justify-center py-[90px]'>
        {/* heading  */}
        <div className='flex flex-col gap-3 items-center text-start md:text-center lg:px-[220px] mb-10'>
            <div className='text-4xl font-semibold'>
                Your swiss knife for
                <Highlight text={" learning any language"}/>
            </div>
            <p className='text-start md:text-center md:w-[70%]'>
                Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </p>
        </div>

        <div className='flex flex-col md:flex-row'>
            <img src={knowYourProgress} alt="knowYourProgress" 
            className='object-contain -mr-32'/>
            <img src={compareWithOthers} alt="compareWithOthers"
            className='object-contain -mr-32' />
            <img src={planYourLesson} alt="planYourLesson" />
        </div>

        {/* button  */}

        <div className='pt-9'>
            <Button active={true} linkto={'/login'}>Learn More</Button>
        </div>
    </div>
  )
}
