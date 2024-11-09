import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import AddSection from './AddSection';
import EditLectureModal from './EditLectureModal';

export default function CourseBuilder() {

    const sections = [1, 2];

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='bg-richblack-800 border-[1px] border-richblack-700 ring-richblack-5 p-6 rounded-lg flex flex-col gap-6 my-10 items-start'>

            <h1 className='text-2xl font-semibold'>
                Course Builder
            </h1>


            <div className="border-[1px] border-richblack-600 bg-richblack-700 px-6 flex flex-col w-full h-fit rounded-lg divide-y-[1px] divide-richblack-500">
                {
                    sections.map((section, index) => {
                        return (
                            <AddSection key={index} section={section} number={index} setShowModal={setShowModal} />
                        )
                    })
                }
            </div>


            <div className='w-full'>
                <input type="firstname" id="firstname" name="firstName" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Add a section to build your course" />

            </div>

            <button className='flex items-center gap-2 text-yellow-50 border-[1px] border-yellow-50 rounded-lg px-6 py-3'>
                <IoIosAddCircleOutline className='text-xl font-semibold ' />
                Create Section
            </button>

            {
                showModal && (
                    <div>
                        <EditLectureModal setShowModal={setShowModal} />
                        <div className='fixed top-0 left-0 z-[100] bg-black w-full h-full opacity-60 flex items-center justify-center'>
                        </div>
                    </div>
                )
            }


        </div>
    )
}
