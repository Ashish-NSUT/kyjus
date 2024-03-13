import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TbCircleLetterK,TbShoppingCart } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import ProfileIcon from '../auth/ProfileIcon';
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/api';



export default function Navbar() {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);

    const [tagLinks, setTagLinks] = useState([]);

    const fetchSubLinks = async () => {
        try{
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            console.log(result);
            setTagLinks(result);

        }catch(err){
            console.log("Could not fetch categories",err);
        } 
    }

    useEffect(() => {
        fetchSubLinks();
    }, [])
    

    const location = useLocation();

  return (
    <div className='border-b-[1px] border-richblack-700 sticky top-0 left-0 z-[999] bg-richblack-900'>
        <div className='flex gap-8 py-3 md:px-[120px] w-11/12 mx-auto justify-between'>
            <Link className='flex items-center' to={"/"}>
                <div className='text-white flex items-center text-2xl'>
                    <div className='text-4xl'><TbCircleLetterK/></div>
                    <p>Kyjus</p>
                </div>
            </Link>

            <ul className='lg:flex text-richblack-25 items-center justify-center hidden'>
                <li className={`py-1 px-3 ${location.pathname === "/" ?"font-semibold text-yellow-50" :""}`}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='flex items-center gap-1 py-1 px-3 relative group hover:cursor-pointer '>
                    <div>
                        Catalog
                    </div>
                    <IoIosArrowDown/>

                    <div className='invisible absolute left-[50%] top-[50%] translate-x-[-50%]
                    translate-y-[80%] flex flex-col opacity-0 transition-all duration-200 group-hover:opacity-100
                    group-hover:visible p-4 bg-richblack-5 text-richblack-900 rounded-md w-[200px]'>

                        <div className='w-6 h-6 absolute left-[50%] top-0 translate-x-[80%] translate-y-[-5%] rotate-45 bg-richblack-5'>
                        </div>


                        {
                            tagLinks.length ? (
                                tagLinks.map( (link ,index) => {
                                    return <Link to={`/catalog/${link.name}`} key={index}>
                                        <p>{link.name}</p>
                                    </Link>
                                })
                            )
                            :(<div></div>)
                        }
                        
                    </div>
                </li>
                <li className={`py-1 px-3 ${location.pathname === "/about" ?"font-semibold text-yellow-50" :""}`}><Link to={"/about"}>About us</Link></li>
                <li className={`py-1 px-3 ${location.pathname === "/contact-us" ?"font-semibold text-yellow-50" :""}`}><Link to={"/contact-us"}>Contact us</Link></li>
            </ul>

            {/* login  */}
            {/* <div className="flex gap-5 justify-end items-center text-richblack-200">
                

            </div>  */}



            {/* if logged in  */}
            <div className="flex gap-5 justify-end items-center text-richblack-200">
                {
                    token !== null && user?.accountType !== "Instructor" && (
                        <Link to={"dashboard/cart"} className="relative">
                            <TbShoppingCart className='text-xl'/>
                            {
                                totalItems > 0 && (
                                    <span className="absolute">totalItems</span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/login"}>
                            <button className="border-[1px] border-richblack-700 bg-richblack-800 rounded-md px-3 py-2 hover:text-richblack-100">Login</button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button className="border-[1px] border-richblack-700 bg-richblack-800 rounded-md px-3 py-2 hover:text-richblack-100">Sign up</button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileIcon image={user?.image}/>
                }

            </div>

        </div>
    </div>
  )
}
