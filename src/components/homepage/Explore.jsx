import React, { useState } from 'react'
import {HomePageExplore} from "../../data/homepage-explore"
import Highlight from './Highlight';
import CourseCard from './CourseCard';
import Button from './Button';
import { FaArrowRight } from "react-icons/fa";
import Tabs from '../common/Tabs';


const tabs =  [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

export default function Explore() {


    const [currentTab, setCurrentTab] = useState("Free");
    const [course,setCourse] = useState(HomePageExplore[0].courses);
    const [card, setCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCard = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourse(result[0].courses);
        setCard(result[0].courses[0].heading)
    }   



  return (
    <div className="flex flex-col gap-9 w-11/12 py-[90px] items-center relative">

        <div className="flex flex-col gap-2 items-center justify-center">
            <div className='text-4xl font-semibold'>
                Unlock the 
                <Highlight text={" Power of Code"}/>
            </div>
            <p className="text-richblack-300">Learn to Build Anything You Can Imagine</p>
        </div>

        {/* tabs  */}
        <div className='hidden md:flex rounded-full bg-richblack-800 justify-between w-full lg:w-[50%] px-[2px]'>
            <Tabs tabs={tabs} currentTab={currentTab} setMyCard={setMyCard}/>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-[95%] md:px-12 py-8 z-[2]">
            {
                course.map((element, index) => {
                    return (
                        <CourseCard key={index} 
                        cardData={element}
                        isActive={card === element.heading}
                        setCard={setCard}
                        />
                    )
                })
            }
        </div>


        {/* buttons  */}

        <div className='flex gap-6 items-center justify-center pt-8 z-[2]'>

            <Button active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                Explore Full Catalog
                <FaArrowRight/>
                </div>
            </Button>

            <Button active={false} linkto={"/login"}>
                Learn More
            </Button>

        </div>

        {/* bg shapes  */}
        <div className="homepage_bg w-[100vw] h-[320px] absolute bg-white bottom-0">
        </div>

    </div>
  )
}
