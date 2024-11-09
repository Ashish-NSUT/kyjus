import React, { useRef, useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";



export default function UploadFile(props) {

    const { register, errors } = props;
    const inpref = useRef(null);
    const [thumbnail, setThumbnail] = useState(null);

    const handleUpload = (e) => {
        console.log(inpref.current);
        inpref.current?.click();
    }

    const handleFileChange = (e) => {
        setThumbnail(URL.createObjectURL(e.target.files[0]));
        console.log(e.target.files[0]);
        register("thumbnail");
    }

    return (
        <div className='w-full text-start'>
            <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">thumbnail <span className="text-pink-200">*</span></label>

            <input
                ref={inpref}
                type="file"
                accept="image/*"
                id="thumbnail"
                name="thumbnail"
                className="hidden"
                onChange={handleFileChange}
            />
            <div className="appearance-none bg-richblack-700 text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-3 border-dashed border-[1px] border-richblack-600 cursor-pointer"
                >

                {
                    (thumbnail != null) ? (
                        <div className="relative w-[90%] mx-auto">
                            <img src={thumbnail} alt="" className='w-full'/>
                            <div className="absolute top-[-10px] right-[-10px] bg-black z-10 rounded-full p-2"
                            onClick={() => setThumbnail(null)}> 
                            <RxCross1/>
                             </div>
                        </div>
                    ) : (
                        <div className='flex flex-col items-center gap-4 w-[35%] mx-auto text-center text-richblack-200'
                        onClick={handleUpload}>
                            <div className="bg-pure-greys-900 text-yellow-50 text-3xl rounded-full p-3">
                                <IoCloudUploadOutline />
                            </div>
                            <p>Drag and drop an image, or <span className='text-yellow-50 font-semibold'>Browse </span>
                                Max 6MB each (12MB for videos)</p>
                        </div>
                    )
                }

            </div>

        </div>
    )
}
