import React from 'react'
import { FaEdit } from "react-icons/fa";

export default function EditBtn() {
  return (
    <button className="flex gap-2 items-center bg-yellow-50 text-black text-center text-[16px] px-6 py-3 rounded-md 
    font-bold transition-all duration-200 hover:scale-95 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)]">
      <FaEdit/>
      Edit
    </button>
  )
}
