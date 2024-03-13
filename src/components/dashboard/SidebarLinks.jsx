import React from 'react'
import * as icons from "react-icons/vsc"
import { useDispatch } from 'react-redux';
import { NavLink, matchPath, useLocation } from 'react-router-dom'

export default function SidebarLinks(props) {

    
    const {data} = props
    const Icon = icons[data.icon];
    const location = useLocation();
    const dispatch = useDispatch();

    const routeMatch = (route) => {
        return matchPath({path:route}, location.pathname);
    }


  return (
    <NavLink 
    to={data.path}
    className={`px-6 py-2 flex items-center ${routeMatch(data.path) ? "bg-yellow-800 text-yellow-50 border-l-[2px] border-yellow-50" : ""}`}>

        <div className="flex gap-3 items-center">
            <Icon className="text-lg"/>
            <span>{data.name}</span>
        </div>
        
    </NavLink>
  )
}
