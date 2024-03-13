import React from 'react'
import { ImTree } from "react-icons/im";
import { HiUsers } from "react-icons/hi2";



export default function CourseCard(props) {

    const {cardData, isActive,setCard} = props;

  return (
    <div className={`${isActive === false ? 'bg-richblack-800' : "bg-richblack-5 shadow-[7px_7px_0px_0px] shadow-yellow-50"} 
    cursor-pointer transition-all duration-200`} onClick={()=>{setCard(cardData.heading)}}>

        <div className="flex flex-col gap-3 px-6 pt-8 pb-12">
            <h1 className={`${isActive === true ? 'text-richblack-800' : "text-richblack-5"} font-semibold`}>{cardData.heading}</h1>
            <p className="text-richblack-500 text-[16px]">{cardData.description}</p>
        </div>

        <div className={`${isActive === true ? 'text-blue-500' : "text-richblack-500"} flex gap-4 px-6 py-3 border-dashed border-t-[2px] items-center`}>
          <div className="flex gap-2 items-center">
            <HiUsers/>
            <p>{cardData.level}</p>
          </div>
          <div className="flex gap-2 items-center w-full justify-end">
            <ImTree/>
            <p>{cardData.lessionNumber} Lessons</p>
          </div>

        </div>
        
    </div>
  )
}
