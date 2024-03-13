import React from 'react';
import { useSelector } from 'react-redux';
import AddedCourseCard from './AddedCourseCard';
import AuthButtons from '../../common/AuthButtons';


export default function AddedCourses() {

    // const {cart,total} = useSelector(state=> state.cart);
    const cart = [1, 2, 3];
    const total  = 1000;

    return (
        <div className='flex items-start justify-evenly'>
            <div className="divide-y-[1px] divide-richblack-700 w-[65%] ">
                {
                    cart.map((course, index) => {
                        return (
                            <AddedCourseCard key={course._id} data={course} />
                        )
                    })
                }
            </div>

            <div className="flex flex-col gap-4 w-[25%] mt-8 bg-richblack-800 border-[1px] border-richblack-700 p-6 rounded-lg">

                <div className='flex flex-col gap-1'>
                    <p className="text-richblack-200 text-sm font-semibold">Total:</p>
                    <div className="text-2xl text-yellow-50 font-semibold">
                        Rs. {total}
                    </div>
                </div>

                <AuthButtons text={"BuyNow"} />


            </div>
        </div>
    )
}