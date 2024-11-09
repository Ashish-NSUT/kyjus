import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import UploadFile from '../../../common/UploadFile';
import AddTags from './AddTags';
import { setStep, setCourse } from "../../../../slices/AddCourseSlice";
import Requirements from './Requirements';
import { editCourseDetail, getCourseCategories, addCourseDetail } from '../../../../services/operations/courseApi';
import { useDispatch, useSelector } from 'react-redux';
import SmallBtns from '../../../common/SmallBtns';
import toast from 'react-hot-toast';

export default function CourseInfo() {

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        setValue,
        getValues,

    } = useForm();

    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const { editCourse, course } = useSelector(state => state.addCourse);
    const { token } = useSelector((state) => state.auth);


    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const result = await getCourseCategories();
                console.log(result);
                if (result?.length > 0) setCategories(result);
            } catch (err) {
                console.error("while fetching categories in courseInfo", err)
            }
        }
        fetchCategories();


    }, [])

    const isFormUpdated = () => {
        const currentValues = getValues();
        if (currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.price ||
            currentValues.courseTitle !== course.courseName ||
            //currentValues.courseTags.toString() !== course.tag.toString() ||
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.courseCategory._id !== course.category._id ||
            //currentValues.courseImage !== course.thumbnail ||
            currentValues.courseRequirements.toString() !== course.instructions.toString())
            return true;
        else
            return false;
    }


    const SubmitForm = async (formData) => {
        if (editCourse) {
            if (isFormUpdated()) {
                const currentValues = getValues();
                const data = new FormData();

                data.append("courseId", course._id);
                if (currentValues.course !== course.courseName) {
                    data.append("courseName", formData.title);
                }
                if (currentValues.courseShortDesc !== course.courseDescription) {
                    data.append("courseShortDesc", formData.description);
                }
                if (currentValues.coursePrice !== course.coursePrice) {
                    data.append("price", formData.price);
                }
                if (currentValues.courseCategory._id !== course.courseCategory) {
                    data.append("category", formData.category);
                }
                if (currentValues.courseBenefits !== course.whatYouWillLearn) {
                    data.append("whatYouWillLearn", formData.whatToLearn);
                }
                if (currentValues.courseRequirements !== course.Requirements) {
                    data.append("instructions", JSON.stringify(formData.Requirements));
                }

                const result = await editCourseDetail(data, token);
                if (result) {
                    setStep(2);
                    dispatch(setCourse(result));
                }

            }
            else {
                toast.error("No changes made");
            }

            return;
        }

        const data = new FormData();

        data.append("courseName", formData.title);
        data.append("courseDescription", formData.description);
        data.append("price", formData.price);
        data.append("category", formData.category);
        data.append("whatYouWillLearn", formData.whatToLearn);
        data.append("instructions", JSON.stringify(formData.Requirements))
        data.append("status", "draft");

        const result = await addCourseDetail(data, token);

        if (result) {
            setStep(2);
            dispatch(setCourse(result));
        }



    }


    return (
        <div className='flex flex-col gap-8 mx-auto my-10 bg-richblack-800 border-[1px] border-richblack-700 rounded-lg p-6 w-full'>


            <form
                onSubmit={handleSubmit(SubmitForm)}
                className='flex flex-col items-center justify-center gap-6'>
                <div className='w-full'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Course Title <span className="text-pink-200">*</span> </label>
                    <input type="firstname" id="firstname" name="firstName" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Course Title"
                        {...register("title", { required: true })} />
                    {
                        errors.firstName && (
                            <span> Course Title </span>
                        )
                    }
                </div>

                <div className='w-full'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Course Short Description <span className="text-pink-200">*</span></label>
                    <textarea type="lastname" id="lastname" name="lastname" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " rows={5} placeholder="Enter Description"
                        {...register("description")} />
                </div>

                <div className='w-full text-start'>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Price <span className="text-pink-200">*</span></label>
                    <input type="number" id="price" name="price" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-3 " placeholder="Enter Price" {...register("price", { required: true })} />
                    {
                        errors.price && (
                            <span>Please Enter Price</span>
                        )
                    }
                </div>

                <UploadFile register={register} error={errors} setValue={setValue} />

                <div className='w-full text-start'>
                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Category <span className="text-pink-200">*</span></label>
                    <select type="tel" id="category" name="code" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block p-3 w-full text-ellipsis" {...register("category", { required: true })} >
                        <option value="" className="block mb-2 text-sm font-medium text-richblack-300 mx-auto" disabled selected>Choose a Category</option>
                        {
                            categories.map((category) => {
                                return (
                                    <option key={category?._id} className='p-2'>{category.description}</option>
                                )
                            })
                        }
                    </select>
                </div>


                <AddTags errors={errors} register={register} setValue={setValue} />


                <div className='w-full text-start'>

                    <label htmlFor="contact" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Benefits of the course <span className="text-pink-200">*</span></label>
                    <textarea name="message" id="message" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block p-3 w-full" placeholder='Enter your message..' cols="30" rows="5"
                        {...register("whatToLearn", { required: true })}>
                    </textarea>
                    {
                        errors.message && (
                            <span>Please Enter message</span>
                        )
                    }

                </div>
                <Requirements errors={errors} register={register} setValue={setValue} />

                <button className='self-end'>
                    <SmallBtns type="submit" text={"Next"} color={1} />
                </button>
            </form>

        </div>
    )
}
