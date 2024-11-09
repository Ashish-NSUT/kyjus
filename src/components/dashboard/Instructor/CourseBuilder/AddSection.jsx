import React, { useState } from 'react'
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import AddSubSection from './AddSubSection';



export default function AddSection({ section, number,setShowModal }) {

  const subSections = [1, 2];

  const [showSubSection, setShowSubSection] = useState(false);

  return (
    <div className='divide-y-[1px] divide-richblack-500'>
      <div key={number} className="py-3 text-richblack-50 flex w-full relative justify-between">
        <div className='flex items-center gap-2'>
          <MdOutlineFormatLineSpacing className='text-richblack-400 text-lg' />
          <p>Lesson - {number + 1}</p>
        </div>

        <div className='divide-x-[1px] divide-richblack-300 flex items-center justify-center text-richblack-400 text-lg'>
          <div className=" flex text-md gap-2 px-3">
            <MdEdit className='cursor-pointer' />
            <RiDeleteBin6Line className='cursor-pointer' />
          </div>
          <div className="px-3 cursor-pointer" onClick={() => setShowSubSection(!showSubSection)}>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>


      <div className={`${showSubSection ? "block" : "hidden"}`}>
        <div >
          {
            subSections.map((subSection, i) => {
              return (
                <AddSubSection key={i} data={subSection} number={number} ind={i} />
              )
            })
          }
        </div>

        <button className='text-yellow-50 font-bold cursor-pointer p-4 w-full text-start'>
          + Add Lecture
        </button>

      </div>

    </div>
  )
}
