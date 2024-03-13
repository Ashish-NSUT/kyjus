import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import ContactForm from './common/ContactForm';
import { ImEarth } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from './common/Footer';




export default function ContactUs() {
  return (
    <>
    <div className="w-10/12 flex gap-14 mx-auto text-richblack-300 py-14">

        <div className='flex flex-col gap-6 w-[40%] bg-richblack-800 h-fit p-6 rounded-xl'>

            <div className='flex gap-2 '>
                <IoIosChatboxes/>

                <div>
                    <h3 className='text-richblack-5 font-semibold text-lg'>Chat on us</h3>
                    <p>Our friendly team is here to help.</p>
                    <p>@mail address</p>
                </div>

            </div>
            <div className='flex gap-2'>
                <ImEarth/>

                <div>
                    <h3 className='text-richblack-5 font-semibold text-lg'>Visit us</h3>
                    <p>
                        Come and say hello at our office HQ.
                    </p>
                    <p>
                        Here is the location/ address
                    </p>
                </div>

            </div>
            <div className='flex gap-2'>
                <FaPhoneAlt/>

                <div>
                    <h3 className='text-richblack-5 font-semibold text-lg'>Call us</h3>
                    <p>
                        Mon - Fri From 8am to 5pm
                    </p>
                    <p>
                        +123 456 7890
                    </p>
                </div>

            </div>


        </div>

        <div className='w-fit border-[1px] border-richblack-800'>
            <ContactForm heading="Got a Idea? We’ve got the skills. Let’s team up" subhead="Tall us more about yourself and what you’re got in mind." />

        </div>

    </div>

    <Footer/>
    </>

  )
}
