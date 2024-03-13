import React from 'react'
import Highlight from '../components/homepage/Highlight'
import bannerImage1 from "../assets/Images/aboutus1.webp"
import bannerImage2 from "../assets/Images/aboutus2.webp"
import bannerImage3 from "../assets/Images/aboutus3.webp"
import foundingStory from "../assets/Images/FoundingStory.png"
import Quote from '../components/about/Quote'
import Stats from '../components/about/Stats'
import LearningGrid from '../components/about/LearningGrid'
import ContactForm from '../components/common/ContactForm'
import Footer from '../components/common/Footer';

export default function About() {
  return (
    <div className="text-richblack-5 flex flex-col gap-14 relative">
        <div className="h-[75vh] w-full bg-richblack-800 absolute top-0"></div>
        {/* section 1 */}

        <section className='w-11/12 mt-[100px] mx-auto flex flex-col items-center justify-center gap-14 z-[10]'>
            {/* heading  */}
            <div className='lg:w-[60%] text-center flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold '>
                    Driving Innovation in Online Education for a
                    <Highlight text={" Brighter Future"}/>
                </h1>
                <p className='w-[88%] mx-auto'>
                    Studynotion is at the forefront of driving innovation in online 
                    education. We're passionate about creating a brighter future by offering cutting-edge 
                    courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                </p>
            </div>

            {/* imgage  */}
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center place-items-center gap-6'>
                <img src={bannerImage1} alt="" />
                <img src={bannerImage2} alt="" />
                <img src={bannerImage3} alt="" className='md:col-span-2 lg:col-span-1'/>
            </div>
        </section>

        {/* section 2 */}
        <section className='border-b border-richblack-700'>
            <div className='w-11/12 text-center mx-auto flex flex-col items-center justify-center py-24'>
                <Quote/>
            </div>
        </section>

        {/* section 3 */}

        <section className='w-11/12 text-center mx-auto flex text-richblack-300 flex-col'>
            <div className='flex justify-between lg:w-10/12 mx-auto flex-col md:flex-row gap-10 py-20' >
                <div className='flex flex-col gap-6 md:w-[38%] text-start w-full'>
                    <h1 className='mx-auto md:mx-0 text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]'>
                        Our Founding Story 
                    </h1>
                    <div className='flex flex-col gap-4'>
                        <p>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. 
                            It all began with a group of educators, technologists, and lifelong learners who recognized the 
                            need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>
                        <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of 
                            traditional education systems. We believed that education should not be confined to the walls 
                            of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge 
                            these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>
                </div>
                <div className='md:w-[40%] w-full flex justify-center'>
                    <img src={foundingStory} alt="" />
                </div>

            </div>

            <div className='flex justify-between lg:w-10/12 mx-auto flex-col md:flex-row gap-10 py-20' >
                <div className='flex flex-col gap-6 md:w-[38%] text-start w-full'>
                    <h1 className='mx-auto md:mx-0 text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#E65C00] to-[#F9D423]'>
                        Our Vision
                    </h1>
                    <p>
                    With this vision in mind, we set out on a journey to create an e-learning 
                    platform that would revolutionize the way people learn. Our team of dedicated 
                    experts worked tirelessly to develop a robust and intuitive platform that combines 
                    cutting-edge technology with engaging content, fostering a dynamic and interactive 
                    learning experience.
                    </p>
                </div>

                <div className='flex flex-col gap-6 md:w-[38%] text-start w-full'>
                    <h1 className='mx-auto md:mx-0 text-4xl font-semibold'>
                        <Highlight text={"Our Mission"}/>
                    </h1>
                    <p>
                    our mission goes beyond just delivering courses online. We wanted to create a vibrant 
                    community of learners, where individuals can connect, collaborate, and learn from one 
                    another. We believe that knowledge thrives in an environment of sharing and dialogue, 
                    and we foster this spirit of collaboration through forums, live sessions, and networking 
                    opportunities.
                    </p>
                </div>
                
            </div>

        </section>

        {/* section 4 */}

        <section className='bg-richblack-800 py-20'>
            <Stats/>
        </section>

        {/* section 5 */}
        <section className='w-11/12 text-center mx-auto flex text-richblack-300 flex-col'>
            <LearningGrid/>
        </section>

        {/* section 6 */}
        <section className='w-11/12 text-center mx-auto flex text-richblack-300 flex-col pt-14'>
            <ContactForm heading={"Get in Touch"} subhead={`We’d love to here for you, Please fill out this form.`} />
        </section>

        {/* section 7 */}


        {/* footer  */}
        <Footer/>
    </div>
  )
}
