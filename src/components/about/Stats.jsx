import React from 'react'

export default function Stats() {

   const stats = [
        { name: 'Active Students', count: "5K"},
        { name: 'Mentors', count: "10+"},
        { name: 'Courses', count: "200+"},
        { name: 'Awards', count: "50+"},
   ]
  return (
    <div className='sm:w-11/12 grid grid-cols-2 md:grid-cols-4 mx-auto place-content-center place-self-center gap-y-8 gap-4'>
        {
            stats.map((stat,index) => {
                return (
                    <div className='flex flex-col items-center justify-center' key={index}>
                        <div className='text-3xl font-bold'>
                            {stat.count}
                        </div>
                        <div className='text-richblack-500'>
                            {stat.name}
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
