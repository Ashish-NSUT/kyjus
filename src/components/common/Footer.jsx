import React from 'react'
import { FaFacebookSquare,FaGoogle,FaTwitter,FaYoutube } from "react-icons/fa";
import { TbCircleLetterK } from "react-icons/tb";



export default function Footer() {
  return (
    <div className="text-richblack-300 border-t-2 border-richblack-600 font-inter bg-richblack-800 transition-all duration-100 cursor-pointer">
        <div className="w-11/12 flex flex-col gap-8 mx-auto py-[52px]">

            <div className='flex flex-col md:flex-row lg:gap-[52px] justify-between'>

                {/* Left  */}
                <div className='flex gap-3 w-full'>
                    {/* logo  */}
                    <div className='flex flex-col gap-3 w-full'>
                            <h2 className='flex items-center text-3xl font-extrabold'>
                                <TbCircleLetterK/>Kyjus
                            </h2>
                            <div className='text-lg font-bold'>
                                Company
                            </div>
                            <ul className='flex flex-col gap-2'>
                                <li className="hover:text-white">About</li>
                                <li className="hover:text-white">Careers</li>
                                <li className="hover:text-white">Affiliates</li>
                            </ul>
                            <ul className='flex gap-3'>
                                <li className="hover:text-white">
                                    <FaFacebookSquare />
                                </li>
                                <li className="hover:text-white">
                                    <FaGoogle />
                                </li>
                                <li className="hover:text-white">
                                    <FaTwitter />
                                </li>
                                <li className="hover:text-white">
                                    <FaYoutube />
                                </li>
                            </ul>
                    </div>

                    {/* resources and support pages */}
                    <div className='flex flex-col gap-9 w-full'>
                        <div className='flex flex-col gap-3'>
                            <div className='font-bold text-lg'>
                                Resources
                            </div>
                            <ul className='flex flex-col gap-2'>
                                <li className="hover:text-white">Articles</li>
                                <li className="hover:text-white">Blog</li>
                                <li className="hover:text-white">Chart Sheet</li>
                                <li className="hover:text-white">Code challenges</li>
                                <li className="hover:text-white">Docs</li>
                                <li className="hover:text-white">Projects</li>
                                <li className="hover:text-white">Videos</li>
                                <li className="hover:text-white">Communities</li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div className='flex flex-col gap-3'>
                            <div className='font-bold text-lg'>
                                Support
                            </div>
                            <div  className="hover:text-white">Help Center</div>
                        </div>
                    </div>

                    {/* plans and community */}
                    <div className='flex flex-col gap-9 w-full'>
                    <div className='flex gap-3 flex-col'>
                            <div className='font-bold text-lg'>
                                Plans
                            </div>
                            <ul className='flex gap-2 flex-col'>
                                <li className="hover:text-white">Paid memberships</li>
                                <li className="hover:text-white">For students</li>
                                <li className="hover:text-white">Business solutions </li>
                            </ul>
                        </div>

                        <div className='flex gap-3 flex-col'>
                            <div className='font-bold text-lg'>
                            Community
                            </div>
                            <ul className='flex gap-2 flex-col'>
                                <li className="hover:text-white">Forums </li>
                                <li className="hover:text-white">Chapters</li>
                                <li className="hover:text-white">Events</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* middle line  */}
                <div className="w-[1px] bg-[#2C333F]"></div>


                {/* Right  */}
                <div className='flex gap-3 w-full'>
                    {/* Subjects  */}
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='font-bold text-lg'>
                            Subjects
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li className="hover:text-white">AI</li>
                            <li className="hover:text-white">Code Foundations</li>
                            <li className="hover:text-white">Computer Science</li>
                            <li className="hover:text-white">Cloud Computing</li>
                            <li className="hover:text-white">Cybersecurity</li>
                            <li className="hover:text-white">Data Analytics</li>
                            <li className="hover:text-white">Data Science</li>
                            <li className="hover:text-white">Data Visualization</li>
                            <li className="hover:text-white">Developer Tools</li>
                            <li className="hover:text-white">DevOps</li>
                            <li className="hover:text-white">Game Development</li>
                            <li className="hover:text-white">IT</li>
                            <li className="hover:text-white">Machine Learning</li>
                            <li className="hover:text-white">Math</li>
                            <li className="hover:text-white">Mobile Development</li>
                            <li className="hover:text-white">Web Design</li>
                            <li className="hover:text-white">Web Development</li>
                        </ul>
                    </div>

                    {/* Languages */}
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='font-bold text-lg'>
                            Languages
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li className="hover:text-white">Bash</li>
                            <li className="hover:text-white">C</li>
                            <li className="hover:text-white">C++</li>
                            <li className="hover:text-white">C#</li>
                            <li className="hover:text-white">Go</li>
                            <li className="hover:text-white">HTML & CSS</li>
                            <li className="hover:text-white">Java</li>
                            <li className="hover:text-white">JavaScript</li>
                            <li className="hover:text-white">Kotlin</li>
                            <li className="hover:text-white">PHP</li>
                            <li className="hover:text-white">Python</li>
                            <li className="hover:text-white">R</li>
                            <li className="hover:text-white">Ruby</li>
                            <li className="hover:text-white">SQL</li>
                            <li className="hover:text-white">Swift</li>
                        </ul>
                    </div>

                    {/* Career building */}
                    <div className='flex flex-col gap-3 w-full'>
                        <div className='font-bold text-lg'>
                            Career building
                        </div>
                        <ul className='flex flex-col gap-2'>
                            <li className="hover:text-white">Career paths</li>
                            <li className="hover:text-white">Career services</li>
                            <li className="hover:text-white">Interview prep</li>
                            <li className="hover:text-white">Professional certification</li>
                            <li className="hover:text-white">-</li>
                            <li className="hover:text-white">Full Catalog</li>
                            <li className="hover:text-white">Beta Content</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div  className="h-[1px] w-full bg-[#2C333F]"></div>

            <div className="flex justify-between items-center">
                <div className="flex gap-2  items-center">
                    <div className="hover:text-white">
                        Privacy Policy
                    </div>
                    <div className="w-[1px] bg-[#2C333F] h-[12px]"></div>
                    <div className="hover:text-white">
                        Cookie Policy
                    </div>
                    <div className="w-[1px] bg-[#2C333F] h-[12px]"></div>
                    <div className="hover:text-white">
                        Terms
                    </div>
                </div>
                <div>
                    Made with ♥ CodeHelp © 2023 Studynotion
                </div>
            </div>
        </div>
    </div>
  )
}
