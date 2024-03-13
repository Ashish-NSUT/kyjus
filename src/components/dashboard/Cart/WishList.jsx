import React from 'react'
import { useSelector } from 'react-redux'
import AddedCourses from './AddedCourses';

export default function WishList() {

    const {totalItems} = useSelector(state => state.cart);

  return (
    <div className='w-11/12 mx-auto text-richblack-25 font-inter overflow-y-auto'>
      <div className='flex py-6 pb-14'>
        <h1 className='text-3xl'>
            My Wishlist
        </h1>
      </div>

      <div className='flex flex-col mx-auto'>

        <p className='text-sm font-semibold text-richblack-400 border-b-[1px] border-richblack-700 pb-4'>{totalItems} Courses in Wishlist</p>

            <AddedCourses/>

      </div>



    </div>
  )
}
