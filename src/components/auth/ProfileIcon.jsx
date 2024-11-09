import React, { useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { VscSignOut } from 'react-icons/vsc';
import YesNoModal from '../common/YesNoModal';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/operations/authApi';
import OnClickOutside from '../../utils/onClickOutside';
import { IoMdArrowDropdown } from "react-icons/io";



export default function ProfileIcon({ image }) {

  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const dropref = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  OnClickOutside(dropref, () => setOpen(false));



  return (
   <>
    <button className='h-[30px] rounded-full relative flex items-center' onClick={() => setOpen(true)}>
      <img className='w-full h-full rounded-full' src={image} alt="" />

      {
        open && (
          <div className='flex flex-col absolute left-[-110px] top-[150%] bg-richblack-800 p-2 divide-y-[1px] divide-richblack-700 rounded-lg border-[1px] border-richblack-700'
            ref={dropref} onClick={(e) => e.stopPropagation()}>

            <Link to="dashboard/my-profile"
              className='flex gap-2 items-center p-3 hover:text-richblack-25' onClick={() => setOpen(false)}>
              <RxDashboard />
              Dashboard
            </Link>

            <Link
              className='flex gap-2 items-center p-3 hover:text-richblack-25' onClick={() => {setModal({
                text1: "Are You Sure?",
                text2: "You will be logged out!",
                btntext1: "Logout",
                btntext2: "Cancel",
                btnHandler1: () => { dispatch(logout(navigate)) },
                btnHandler2: () => { setModal(null) },
              });
              setOpen(false);}
              }>

              <VscSignOut />
              logout

            </Link>

            <div className="w-4 h-4 absolute left-[118px] top-[-9px] rotate-45 bg-richblack-800 border-[1px] border-richblack-700 border-r-0"></div>

          </div>

        )
      }
      <div className="flex items-center text-2xl"> <IoMdArrowDropdown/> </div>


      {modal && <YesNoModal data={modal} />}
    </button>
      {modal && <div className="w-[100vw] h-full bg-black opacity-60 fixed top-0 left-0 z-[50]"></div>}
   </>
  )
}
