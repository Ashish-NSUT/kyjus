import React from 'react'
import { Link } from 'react-router-dom';

export default function Button(props) {

    const {children, active, linkto} = props;
  return (
    <Link to={linkto}>
        <div className={`${active? "bg-yellow-50 text-black" :"bg-richblack-800 text-white"} text-center text-[16px] px-6 py-3 rounded-md 
        font-bold transition-all duration-200 hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]`}>
            {children}
        </div>
    </Link>
  )
}
