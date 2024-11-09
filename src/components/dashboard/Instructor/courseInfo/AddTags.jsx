import React, { useEffect, useState } from 'react'
import { IoAdd } from 'react-icons/io5';
import { RxCross1 } from "react-icons/rx";

export default function AddTags(props) {

    const { register, errors, name, setValue, getValues } = props;

    const [tagValue, setTagValue] = useState("");
    const [tags, setTags] = useState([]);


    useEffect(() => {
        register(name, {
            required: true,
        })

    },[])

    useEffect(() => {
        setValue(name,tags);

    },[tags])


    const addTags = () => {

        if(tagValue) {
            setTags([...tags, tagValue]);
            setTagValue("");
        }
    }

    const removeTag = (index) => {
        const newList = [...tags];
        newList.splice(index, 1);
        setTags(newList);
    }


    return (
        <div className='w-full text-start flex flex-col gap-2'>
            <label htmlFor="tag" className="block text-sm font-medium text-richblack-5">Tags <span className="text-pink-200">*</span></label>

            <div className='flex flex-wrap gap-4'>
                {
                    tags?.map((tag, index) => {

                        return (
                            <div key={index} className='flex gap-2 text-sm items-center rounded-full bg-richblack-600 px-3 py-1 my-2'>
                                <p>{tag}</p>
                                <RxCross1 className='cursor-pointer' onClick={() => removeTag(index)} />
                            </div>
                        )

                    })
                }
            </div>

            <div className='relative'>
                <input type="string" id="tag" name="tag" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Choose a Tag" value={tagValue}
                    onChange={(e) => setTagValue(e.target.value)} />
                    {
                        errors[name] && (
                            <span>Please enter tags</span>
                        )
                    }

                    <div className="absolute cursor-pointer top-[30%] z-[1] right-[15px] border-[2px] border-yellow-50 text-yellow-50 text-lg rounded-full"
                     onClick={addTags}>
                        <IoAdd />
                    </div>

            </div>

        </div>
    )
}
