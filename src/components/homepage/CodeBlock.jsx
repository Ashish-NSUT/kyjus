import React from 'react'
import Button from './Button'
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


export default function CodeBlock(props) {

    const {para,heading, bt1, bt2, gradient, codeblock, position} = props;

  return (
    <div className={`${position} flex flex-col my-20 justify-between gap-24 w-full md:flex-row items-center`}>
        <div className='md:w-[50%] flex flex-col gap-8 md:pl-9'>
            {heading}
            <p className='text-lg text-richblack-300 font-bold'>
                {para}
            </p>

            <div className='flex gap-7 mt-8'>
                <Button active={bt1.active} linkto={bt1.linkto}>
                    <div className='flex items-center gap-2'>
                        <p>
                            {bt1.text}
                        </p>
                        <FaArrowRight/>
                    </div>
                </Button>
                <Button active={bt2.active} linkto={bt2.linkto}>
                    <div className='flex items-center gap-2'>
                        <p>
                            {bt2.text}
                        </p>
                    </div>
                </Button>
            </div>
        </div>

        {/* Code section  */}
        <div className='flex md:w-[50%] text-sm md:text-[16px] w-full border-[1px] py-8 sm:px-8 border-white/[0.22]' 
        style={
            {
                background: "linear-gradient(112deg, rgba(14, 26, 45, 0.24) -1.4%, rgba(17, 30, 50, 0.38) 104.96%)",
                backdropFilter: "blur(26px)"
            }
        } >
            <div className='flex flex-col w-[10%] text-center text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
            </div>

            <div className='flex flex-col w-[90%] font-bold font-mono gap-2 pr-2 text-white'>
                <TypeAnimation
                sequence={[codeblock, 100,""]}
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true} 
                
                style={
                    {
                        whiteSpace: "pre-line",
                        display: "block"
                    }

                }/>
            </div>

            <div className='absolute top-[-25px] left-[-30px] opacity-[0.2] rounded-full w-[372px] h-[257px]'
            style={
                {
                    background: gradient,
                    filter: "blur(34px)"
                }
            }>
            </div>
        </div>
    </div>


  )
}
