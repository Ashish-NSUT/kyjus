import React from 'react'
import { useForm } from 'react-hook-form';
import { RxCross2 } from "react-icons/rx";
import SmallBtns from '../../../common/SmallBtns';

export default function EditLectureModal(props) {

    const {setShowModal} = props;

    const {
        register,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    return (
        <div className="w-full h-full z-[115] fixed top-0 left-0 flex items-center justify-center">

            <div className="flex flex-col md:w-[40%] rounded-lg overflow-hidden">
                <div className="flex justify-between px-6 py-3 text-lg text-white bg-richblack-600 h-fit my-auto items-center">
                    <p>Editing Lecture</p>
                    <button onClick={() => setShowModal(false)}>
                        <RxCross2 />
                    </button>
                </div>

                <form action="" className='bg-richblack-800 p-8 flex flex-col gap-6'>
                    <div className='w-full'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Course Title <span className="text-pink-200">*</span> </label>
                        <input type="firstname" id="firstname" name="firstName" className="bg-richblack-600 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Course Title"
                            {...register("title", { required: true })} />
                        {
                            errors.firstName && (
                                <span> Course Title </span>
                            )
                        }
                    </div>
                    <div className='w-full'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Course Title <span className="text-pink-200">*</span> </label>

                        <div className='w-full flex gap-4'>
                            <input type="number" id="hour" name="hour" className="bg-richblack-600 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 appearance-none" placeholder="HH" />
                            <input type="number" id="minute" name="minute" className="bg-richblack-600 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="MM" />
                            <input type="number" id="seconds" name="seconds" className="bg-richblack-600 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="SS" />
                        </div>

                    </div>

                    <div className='w-full'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Course Short Description <span className="text-pink-200">*</span></label>
                        <textarea type="lastname" id="lastname" name="lastname" className="bg-richblack-600 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " rows={5} placeholder="Enter Description"
                            {...register("description")} />
                    </div>

                    <div className='flex gap-4 justify-end'>
                        <button>
                            <SmallBtns text={"Cancel"} color={0}/>
                        </button>
                        <button>
                            <SmallBtns text={"Save Changes"} color={1}/>
                        </button>
                    </div>


                </form>



            </div>



        </div>
    )
}
