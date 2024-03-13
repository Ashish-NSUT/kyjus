import React from 'react'
import ReactStars from 'react-stars';
import photo from "../../../assets/Images/Instructor.png"
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AddedCourseCard(props) {

  const { data } = props;

  return (
    <div className="flex gap-5 p-8">

      <img src={photo} alt="" className='w-[150px] rounded-lg' />

      <div className="flex flex-col gap-2 text-richblack-300">
        <h2 className="text-lg text-richblack-5">
          {data?.name}
          The Complete Python Bootcamp From Zero to Hero in Python
        </h2>

        <p className="text-sm">
          Name
        </p>

        <div className="flex gap-2 text-sm">
          <ReactStars
            count={5}
            value={4.2}
            edit={false}
            half={true}
          />

          {/* <p>{`(${data?.rating.size})`}</p> */}
          <p>Review</p>

        </div>

      </div>

      <div className="flex flex-col gap-5 ">
        <button className="flex gap-1 text-pink-200 text-md items-center bg-richblack-800 border-[1px] border-richblack-700 p-3 rounded-lg">
          <RiDeleteBin6Line />
          Remove
        </button>

        <div className="text-2xl text-yellow-50 font-semibold">
          Rs. 1,700 {data?.price}
        </div>
      </div>

    </div>
  )
}
