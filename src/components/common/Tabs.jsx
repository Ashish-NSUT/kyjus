import React from 'react'

export default function Tabs(props) {

    const {tabs, currentTab,setMyCard} = props;
  return (
    <>
        {
            tabs.map((element, index) => {
                return (
                    <div className={`text-[16px] flex items-center gap-2 border-[3px] border-richblack-800
                    ${element === currentTab
                        ? "bg-richblack-900 text-richblack-5 font-md"
                        : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:text-richblack-5 py-2 px-4`}
                        key={index} onClick={() => setMyCard(element)}>
                            {element}
                    </div>
                )
            })
        }
        
    </>
  )
}
