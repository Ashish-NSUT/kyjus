import React, {useState,useEffect} from 'react'

export default function Requirements(props) {

    const { register, errors, name, setValue, getValues } = props;

    const [RequirementsValue, setRequirementsValue] = useState("");
    const [Requirements, setRequirements] = useState([]);

    useEffect(() => {
        register(name, {
            required: true,
        })

    },[])

    useEffect(() => {
        setValue(name,Requirements);

    },[Requirements])


    const addRequirements = () => {

        if(RequirementsValue) {
            setRequirements([...Requirements, RequirementsValue]);
            setRequirementsValue("");
        }
    }

    const removeRequirements = (index) => {
        const newList = [...Requirements];
        newList.splice(index, 1);
        setRequirements(newList);
    }


    return (
        <div className='w-full items-start flex flex-col gap-2'>

            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-richblack-5">Requirements/Instructions <span className="text-pink-200">*</span></label>
            <textarea name="message" id="message" className="bg-richblack-700 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500
                         focus:border-blue-500 block p-3 w-full" placeholder='Enter Requirements' rows="1" value={RequirementsValue}
               onChange={(e) => setRequirementsValue(e.target.value)} >
            </textarea>
            {
                errors[name] && (
                    <span>Please Requirements</span>
                )
            }

            <ul className='flex flex-col gap-1'>
                {
                    Requirements.map((req, index) => {
                        return (
                            <li className='flex gap-3 text-sm p-2'>
                                <p>{req}</p>
                                <div className='text-richblack-400 cursor-pointer' onClick={() => removeRequirements(index)}>Clear</div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="text-yellow-50 font-bold cursor-pointer pl-2" onClick={addRequirements}>
                Add
            </div>


        </div>
    )
}
