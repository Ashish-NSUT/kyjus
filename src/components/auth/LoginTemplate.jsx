import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import imageBg from "../../assets/Images/frame.png"
import Tabs from '../common/Tabs';


const tabs =  [
    "Student",
    "Instructor"
]

export default function LoginTemplate(props) {

    const {heading, description, coloredDescription, type , image} = props;
    const [accountType, setAccountType] = useState("Student"); 


  return (
    <div className="grid lg:grid-cols-2 place-items-center h-[calc(100vh-5rem)]">

        <div className='flex flex-col gap-7 px-8 max-w-[450px] lg:text-start text-center'>
            {/* heading */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-richblack-5 text-3xl font-semibold'>{heading}</h1>
                <p className='text-richblack-100'>{description} 
                    <span className='text-blue-100 font-edu-sa font-bold'>{coloredDescription}</span></p>
            </div>

            {/* toggle  */}
            <div className='flex rounded-full bg-richblack-800 justify-between w-full lg:w-[50%]'>
                <Tabs tabs={tabs} currentTab={accountType} setMyCard={setAccountType}/>
            </div>

            {
                type === "login" ? <LoginForm accountType={accountType}/> : <SignupForm accountType={accountType}/>
            }

        </div>

        {/* image */}
        <div className='relative hidden lg:flex mx-auto items-center'>
            <img src={image} alt="" loading='lazy'
            height={558}
            width={504}
            className='absolute -top-4 right-4'/>

            <img src={imageBg} alt="" loading='lazy' 
            height={558}
            width={504}/>
        </div>
        
    </div>
  )
}
