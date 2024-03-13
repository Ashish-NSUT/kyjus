import React from 'react'

export default function YesNoModal(props) {

    const {text1, text2,btntext1,btntext2, btnHandler1,btnHandler2} = props.data;

  return (
    <div className='z-[999] p-8 py-6 fixed top-[35%] left-[15%] md:left-[40%] bg-richblack-800 border-[1px] border-richblack-500 flex flex-col gap-8 rounded-md min-w-[300px] w-[22%] backdrop-blur-xl'>

        <div className="text-start">
            <h2 className='text-2xl text-richblack-5'>{text1}</h2>
            <p className='text-md'>{text2}</p>
        </div>

        <div className='flex gap-4'>
            <button className='bg-yellow-50 text-black text-center text-[16px] px-6 py-3 rounded-md 
                font-bold transition-all duration-200 hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]' onClick={btnHandler1}>
                {btntext1}
            </button>
            <button className='bg-richblack-700 text-center text-[16px] px-6 py-3 rounded-md 
                font-bold transition-all duration-200 hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]' onClick={btnHandler2}>
                {btntext2}
            </button>
        </div>
        
    </div>
  )
}
