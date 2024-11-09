import React from 'react'
import { FaCheck } from "react-icons/fa";

export default function Publish() {
    return (
        <div className='bg-richblack-800 border-[1px] border-richblack-700 ring-richblack-5 p-6 rounded-lg flex flex-col gap-6 my-10'>

            <h1 className='text-2xl font-semibold'>
                Publish Settings
            </h1>

            <div className='flex gap-4 items-center'>
                <div className='h-5 w-5 relative border-[3px] rounded-md border-richblack-700'>
                    <input type="checkbox" id="publish" className="peer absolute top-0 appearance-none bg-transparent z-[100] w-full h-full cursor-pointer" />
                    <div className='invisible peer-checked:visible absolute top-0 left-0 text-lg'> <FaCheck /></div>
                </div>
                <label htmlFor="publish" className="text-richblack-400">Make this Course Public</label>
            </div>

        </div>
    )
}
