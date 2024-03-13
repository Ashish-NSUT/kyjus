import React from 'react'
import Highlight from '../homepage/Highlight'
import Button from '../homepage/Button'


const gridData = [
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        para: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        para: "The learning process uses the namely online and offline."
    },
    {
        order: 13,
        heading: "",
        para: ""
    },
    {
        order:3,
        heading: "Certification",
        para: "You will get a certificate that can be used as a certification during job hunting."
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        para: "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor."
    },
    {
        order: 5,
        heading: "Ready to Work",
        para: "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program."
    }
]


export default function LearningGrid() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:w-10/12 mx-auto py-14'>
            <div className='text-start col-span-2 pb-10 md:pb-0 md:pr-10 flex flex-col gap-3 items-start'>
                <h1 className='text-[36px] font-semibold text-richblack-5'>
                    World-Class Learning for
                    <Highlight text={" Anyone, Anywhere"} />
                </h1>
                <p className='pb-10'>
                    Studynotion partners with more than 275+ leading universities and companies to bring flexible,
                    affordable, job-relevant online learning to individuals and organizations worldwide.
                </p>

                <Button active={true} linkto={'/signup'}>
                    Learn More
                </Button>

            </div>
            {
                gridData.map((data,index) => {
                    return (
                        <div key={index} className={`pt-8 px-4 text-center md:text-start md:px-10 pb-16  ${data.order%2 === 1 ?`${data.order === 13 ? "" : "bg-richblack-700"}` : "bg-richblack-800"} flex flex-col gap-8`}>
                            <h1 className='text-lg text-richblack-5 font-semibold'>
                                {data.heading}
                            </h1>
                            <p className='text-sm'>
                                {data.para}
                            </p>

                        </div>
                    )
                })
            }
            
        </div>
    )
}
