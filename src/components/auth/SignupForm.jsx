import React , {useState} from 'react'
import toast from 'react-hot-toast';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { setSignupData } from "../../slices/AuthSlice"
import {sendOtp} from "../../services/operations/authApi"
import AuthButtons from '../common/AuthButtons';



export default function SignupForm(props) {

  const {accountType} = props;

  const [view , setView] = useState(true);
  const [view2 , setView2] = useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("+91");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match");
      return;
    }

    dispatch(setSignupData({
      firstName,
      lastName,
      email,
      password,
      contactNumber : code+contact,
      accountType
    }));

    dispatch(sendOtp(email,navigate));

  }

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

      {/* name  */}
        <div className='flex gap-5'>
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">First Name <span className="text-pink-200">*</span> </label>
              <input type="firstname" id="firstname" name="firstName" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter First Name" required onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Last Name <span className="text-pink-200">*</span></label>
              <input type="lastname" id="lastname" name="lastname" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Last Name" required onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>

        {/* email  */}
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Email Address <span className="text-pink-200">*</span></label>
            <input type="email" id="email" name="email" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Enter Email.." required onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        {/* <div>
            <label htmlFor="contact" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Phone Number <span className="text-pink-200">*</span></label>
            <div className="flex gap-5">
              <input type="tel" id="code" name="code" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 w-[20%]" placeholder="Enter Email.." required onChange={(e) => setCode(e.target.value)} />
              <input type="tel" id="contact" name="number" pattern="[0-9]{10}"  className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-3 " placeholder="12345 67890" required onChange={(e) => setContact(e.target.value)} />
            </div>
        </div> */}

        <div className='flex gap-5'>
          <div className='relative'>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Create Password <span className="text-pink-200">*</span></label>
              <input type={`${view ? "password" : "text"}`} id="password" name="password" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 relative" placeholder="Enter Password.." required onChange={(e) => setPassword(e.target.value)} />
              <div className="absolute inset-y-12 right-3 flex items-center cursor-pointer text-richblack-300 text-lg" onClick={()=>{setView(!view)}}>
                  {
                      view ? <FaRegEye/> : <FaRegEyeSlash/>
                  }
              </div>
          </div>
          <div className='relative'>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-richblack-5 mx-auto">Confirm Password <span className="text-pink-200">*</span></label>
              <input type={`${view2 ? "password" : "text"}`} id="confirmPassword" name="confirmPassword" className="bg-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)] text-richblack-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 relative" placeholder="Enter Password.." required onChange={(e) => setConfirmPassword(e.target.value)} />
              <div className="absolute inset-y-12 right-3 flex items-center text-richblack-300 text-lg cursor-pointer" onClick={()=>{setView2(!view2)}}>
                  {
                      view2 ? <FaRegEye/> : <FaRegEyeSlash/>
                  }
              </div>
          </div>
        </div>

        <AuthButtons text={"Create Account"} type="submit" />
    </form>
  )
}
