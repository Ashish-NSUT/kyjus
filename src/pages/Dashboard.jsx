import React from 'react'
import SideBar from '../components/dashboard/SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Dashboard() {

  const {loading:authLoading} = useSelector((state) => state.auth)
  const {loading:profileLoading} = useSelector((state) => state.profile);

  if(authLoading || profileLoading) {
    return (
      <div className="mt-10">Loading...</div>
    )
  }

  return (
    <div className="flex overflow-y-hidden">

        <SideBar/>

        <div className='w-full overflow-y-auto h-[calc(100vh-3.9rem)]'>
            <div>
                <Outlet/>
            </div>
        </div>
        
    </div>
  )
}
