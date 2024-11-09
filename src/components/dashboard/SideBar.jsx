import React, { useState } from 'react'
import { dashData } from '../../data/dashboard-links';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SidebarLinks from './SidebarLinks';
import YesNoModal from '../common/YesNoModal';
import { VscSignOut } from 'react-icons/vsc';
import { logout } from '../../services/operations/authApi';


export default function SideBar() {

  const { user, loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modal, setModal] = useState(null);

  if (authLoading || profileLoading) {
    return (
      <div className="mt-10">Loading...</div>
    )
  }


  return (
    <>
      <div className='lg:flex flex-col min-w-[250px] bg-richblack-800 text-richblack-300 py-8 h-[calc(100vh-3.9rem)] sticky top-0 hidden z-[100]'>

        <div className='flex flex-col'>
          {
            dashData.map((data, index) => {
              if (data.type && data.type !== user?.accountType) return null;
              return (
                <SidebarLinks key={index} data={data} />
              )
            })
          }
        </div>

        <div className='w-full h-[1px] px-4 my-4'><div className='bg-richblack-600 h-full '></div></div>

        <div className='flex flex-col'>
          <SidebarLinks data={{ name: "Setting", path: "dashboard/setting", icon: "VscSettingsGear" }} />
          <button onClick={() => {
            setModal({
              text1: "Are You Sure?",
              text2: "You will be logged out!",
              btntext1: "Logout",
              btntext2: "Cancel",
              btnHandler1: () => { dispatch(logout(navigate)) },
              btnHandler2: () => { setModal(null) },
            }
            )
          }}
            className='flex gap-3 items-center px-6 py-2'>

            <VscSignOut />
            <p>Logout</p>
          </button>
        </div>


        {modal && <YesNoModal data={modal} />}
        {modal && <div className="w-full h-full bg-black opacity-60 fixed top-0 z-[100]"></div>}
      </div>
    </>
  )
}
