import React from 'react'

export default function Highlight({text}) {
  return (
    <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]'>
         {text}
    </span>
  )
}
