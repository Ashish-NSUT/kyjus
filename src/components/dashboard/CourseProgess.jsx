import React, { useRef, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { HiDotsVertical } from "react-icons/hi";
import photo from "../../assets/Images/signup.webp"
import OnClickOutside from '../../utils/onClickOutside';
import { Link } from 'react-router-dom';
import { HiDocumentCheck } from "react-icons/hi2";
import { HiMiniTrash } from "react-icons/hi2";




export default function CourseProgess({ data }) {

    const [open, setOpen] = useState(false);
    const dropref = useRef();

    OnClickOutside(dropref, () => setOpen(false))

    return (
        <div className='flex p-4 justify-evenly text-start border-t-[1px] border-richblack-700 items-center'>

            <div className='flex gap-5 w-[45%] item-center'>
                <img src={photo} alt="" className='h-[55px] rounded-lg' />

                <div className=''>
                    <h2 className='text-richblack-5'>{data?.name}This is a Course</h2>
                    <p className='text-richblack-300'>{data?.description} description</p>
                </div>

            </div>
            <div className='w-[20%] flex items-center'>
                {data?.duration} 2:30hrs
            </div>

            <div className='flex flex-col gap-1 w-[25%] justify-center'>
                <div className='text-sm'>Progress {data?.progress}%</div>
                <div>
                    <ProgressBar completed={70} />
                </div>
            </div>

            <div className='w-[10%] flex items-center justify-center relative'>
                <HiDotsVertical onClick={()=> setOpen(true)} className='cursor-pointer hover:bg-richblack-800 rounded-full text-2xl'/>
                {
                    open && (
                        <div className='flex flex-col absolute left-[-110px] top-[150%] bg-richblack-600 p-1 divide-y-[1px] divide-richblack-500 rounded-lg border-[1px] border-richblack-500 z-10'
                            ref={dropref} onClick={(e) => e.stopPropagation()}>

                            <Link to="dashboard/my-profile"
                                className='flex gap-2 items-center p-2 hover:text-richblack-25' onClick={() => setOpen(false)}>
                                <HiDocumentCheck />
                                Mark as Completed
                            </Link>

                            <Link
                                className='flex gap-2 items-center p-2 hover:text-richblack-25'>

                                <HiMiniTrash />
                                Remove

                            </Link>

                            {/* <div className="w-4 h-4 absolute left-[158px] top-[-9px] rotate-45 bg-richblack-600 border-[1px] border-richblack-500 border-r-0"></div> */}

                        </div>

                    )
                }
            </div>


        </div>
    )
}
