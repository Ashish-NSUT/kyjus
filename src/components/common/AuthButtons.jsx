import React from 'react'

export default function AuthButtons({text}) {
  return (
    <button className="bg-yellow-50 text-black text-center text-[16px] px-6 py-3 rounded-md 
        font-bold transition-all duration-200 hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] w-full">
        {text}
    </button>
  )
}
