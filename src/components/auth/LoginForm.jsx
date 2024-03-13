import React ,{useState} from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import AuthButtons from '../common/AuthButtons';
import { login } from '../../services/operations/authApi';
import { useDispatch } from 'react-redux';

export default function LoginForm({accountType}) {

    const [view , setView] = useState(true); 
    const [form , setForm] = useState({ 
        email: "",
        password: "",
    }); 
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const onChange = (e) =>{
        setForm((prevstate) => ({
            ...prevstate,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(form.email, form.password, navigate))
    }


  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>

        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Email Address <span className="text-pink-200">*</span></label>
            <input type="email" id="email" name="email" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Email.." required onChange={onChange} />
        </div>
        <div className='relative'>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Password <span className="text-pink-200">*</span></label>
            <input type={`${view ? "password" : "text"}`} id="password" name="password" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 relative" placeholder="Enter Password.." required onChange={onChange} />
            <div className="absolute inset-y-12 right-3 flex items-center text-richblack-300 text-lg" onClick={()=>{setView(!view)}}>
                {
                    view ? <FaRegEye/> : <FaRegEyeSlash/>
                }
            </div>
            <Link to={"/Forgot-password"}>
                <div className="text-end text-blue-100 text-sm mt-2">
                    Forgot Password
                </div>
            </Link>
        </div>
        <AuthButtons text={"Login"} type="submit"/>
    </form>
  )
}
