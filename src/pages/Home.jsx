import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import Highlight from '../components/homepage/Highlight';
import Button from '../components/homepage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlock from '../components/homepage/CodeBlock';
import Footer from '../components/common/Footer';
import TimelineSection from '../components/homepage/TimelineSection';
import Language from '../components/homepage/Language';
import Instructor from '../components/homepage/Instructor';
import Explore from '../components/homepage/Explore';

export default function Home() {
  return (
    <div className="">
        {/* Section 1 */}

        <div className="relative flex flex-col justify-center items-center w-11/12 text-white mx-auto mt-[100px] max-w-maxContent">
            <Link to="/signup">
                <div className='group rounded-full mx-auto bg-richblack-800 text-richblack-200 
                transition-all duration-200 hover:scale-95 w-fit border border-richblack-800 shadow-[0px_1px_0px_0px_rgba(255,255,255,0.18)]'>
                    <div className='flex items-center gap-[10px] px-5 py-[6px] transition-all duration-200 group-hover:bg-richblack-900 text-md font-bold'>
                      <p>Become an Instructor</p>
                      <FaArrowRight />
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-9'>
            Empower Your Future with 
              <Highlight text={" Coding Skills"}/>
            </div>

            <div className='w-[80%] mt-4 text-center text-lg text-richblack-300 font-bold'>
              With our online coding courses, you can learn at your own pace, from anywhere 
              in the world, and get access to a wealth of resources, 
              including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex gap-7 mt-10'>
              <Button active={true} linkto={'/signup'}>
                Learn More
              </Button>

              <Button active={false} linkto={'/login'}>
                Book a Demo
              </Button>
            </div>



            <div className='shadow-white-200 mx-3 my-12 shadow-[20px_20px_0px_0px]'>
              <video
              muted
              loop
              autoPlay src={Banner}
              loading="lazy"></video>
            </div>


        {/* Code Section 1 */}
          <div className='w-full'>
            <CodeBlock
            para={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
            position={"lg:flex-row"}
            heading={
              <div className='text-start text-4xl font-semibold text-white'>
                Unlock your 
                <Highlight text={"  coding potential "}/>
                with our online courses.
              </div>
            }
            bt1 = {
              {
                text: "Try it yourself",
                linkto : "/signup",
                active : true,
              }
            }
            bt2 = {
              {
                text: "Learn More",
                linkto : "/login",
                active : false,
              }
            }
            codeblock={`<!DOCTYPE html>\n <html> \n <head><title>Example \n </title>\n<linkrel="stylesheet"href="styles.css"> \n </head>\n <body>\n <h1><ahref="/">Header</a> \n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two \n </a><ahref="three/">Three</a>\n </nav>`}
            gradient={"linear-gradient(124deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%)"}
            />
            </div>


        {/* Code Section 2 */}
          <div className='w-full'>
            <CodeBlock
            para={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-start text-4xl font-semibold text-white'>
                Start
                <Highlight text={" coding in seconds"}/>
              </div>
            }
            bt1 = {
              {
                text: "Continue Lesson",
                linkto : "/signup",
                active : true,
              }
            }
            bt2 = {
              {
                text: "Learn More",
                linkto : "/login",
                active : false,
              }
            }
            codeblock={`<!DOCTYPE html>\n <html> \n <head><title>Example \n </title>\n<linkrel="stylesheet"href="styles.css"> \n </head>\n <body>\n <h1><ahref="/">Header</a> \n </h1> \n <nav><ahref="one/">One</a><ahref="two/">Two \n </a><ahref="three/">Three</a>\n </nav>`}
            gradient={"linear-gradient(118deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%)"}
            />
          </div>

        {/* Explore  */}
        <Explore/>

        </div>




        {/* Section 2 */}
          
          <div className="bg-pure-greys-5 text-richblack-700 font-inter">

            {/* 2nd part  */}

            <div className="flex flex-col gap-14 w-11/12 mx-auto py-[90px] justify-center items-center ">
                {/* heading  */}
                <div className='flex flex-col sm:flex-row gap-3 justify-evenly'>
                    <div className='text-4xl font-semibold sm:w-[45%]'>
                      Get the skills you need for a 
                      <Highlight text={" job that is in demand."}/>
                    </div>

                    <div className='flex flex-col gap-3 sm:w-[45%]'>
                        <p className='text-start text-lg'>
                          The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </p>
                        <div className='flex items-start pt-9'>
                          <Button active={true} linkto={"/login"}>Learn More</Button>
                        </div>
                    </div>
                </div>

                {/* image  */}
                <TimelineSection/>
            </div>


            {/* Language part  */}
              <Language/>

          </div>

        {/* Section 3 */}
          
          <div className="w-11/12 mx-auto flex flex-col items-center justify-between">

            {/* Instructor  */}
            <Instructor/>

          </div>




        {/* Footer */}
        <Footer/>
    </div>
  )
}
