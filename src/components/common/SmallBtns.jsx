import React from 'react'

export default function SmallBtns({text, color, func}) {
  return (
    <div className={`${color ? "bg-yellow-50 text-black" : "bg-richblack-700 text-richblack-50"} text-center text-[16px] px-4 py-1 rounded-md 
        font-bold transition-all duration-200 hover:scale-95 shadow-[1px_1px_0px_0px_rgba(255,255,255,0.18)]`}>
        {text}
    </div>
  )
}
