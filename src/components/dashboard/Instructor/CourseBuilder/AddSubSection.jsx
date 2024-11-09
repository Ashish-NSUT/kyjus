import React from 'react'
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

export default function AddSubSection(props) {

    const { subSection, number, ind } = props;

    return (
        <div className="py-3 text-richblack-50 flex w-full relative justify-between pl-4 border-b-[1px] border-richblack-500">
            <div className='flex items-center gap-2'>
                <MdOutlineFormatLineSpacing className='text-richblack-400 text-lg' />
                <p>Lesson - {number+1}.{ind + 1}</p>
            </div>

            <div className='divide-x-[1px] divide-richblack-300 flex items-center justify-center text-richblack-400 text-lg'>
                <div className=" flex text-md gap-2 px-3">
                    <MdEdit className='cursor-pointer' />
                    <RiDeleteBin6Line className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
