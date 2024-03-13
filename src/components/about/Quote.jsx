import React from 'react'
import Highlight from '../homepage/Highlight'

export default function Quote() {
  return (
    <div className="text-4xl font-semibold text-[#AFB2BF] lg:w-[88%]">
        "We are passionate about revolutionizing the way we learn. Our innovative platform 
        <Highlight text={" combines technology"}/>, 
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF512F] to-[#F09819]"> expertise
        </span>, and community to create an 
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E65C00] to-[#F9D423]"> unparalleled educational experience.</span>"
    </div>
  )
}
