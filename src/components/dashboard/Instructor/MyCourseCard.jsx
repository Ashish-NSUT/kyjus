import React from 'react'
import photo from "../../../assets/Images/Instructor.png"
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";


export default function MyCourseCard({ data }) {
    return (
        <div className="flex p-4 text-sm items-center text-richblack-100">

            <div className='w-[70%] flex gap-6'>
                <img src={photo} alt="" className='w-[130px] h-full rounded-lg' />

                <div className="flex flex-col gap-3 text-richblack-300">
                    <div className="flex flex-col gap-2">
                    <h2 className="text-lg text-richblack-5">
                        {data?.name}
                        The Complete Python Bootcamp From Zero to Hero in Python
                    </h2>

                    <p className="text-sm">
                        {data?.description}
                        The Complete Python Bootcamp From Zero to Hero in Python
                    </p>
                    </div>

                    <div className="text-richblack-25">
                        Created: {data?.created_at}

                    </div>

                </div>
            </div>

            <div className="w-[10%]">
                {data?.duration}
                5h 30min
            </div>
            <div className="w-[10%]">
                {data?.duration}
                Rs. 520
            </div>
            <div className="w-[10%] flex text-xl gap-2">
                <MdEdit/>
                <RiDeleteBin6Line/>
            </div>

        </div>
    )
}
