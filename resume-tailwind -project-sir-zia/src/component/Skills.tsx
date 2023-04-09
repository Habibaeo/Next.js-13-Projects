'use client'
import React, {useState} from 'react'

export default function Skills({data}:any) {
    const [activeTab, setActiveTab ]= useState('soft')
   const setBg = (active:string) => activeTab === active ? 'bg-yellow': 'bg-grey'
   const setTabsAlignment = (tab:string) => tab === 
   "soft" ? 'text-left': 'text-right'
  const tab = (<div className='flex'>
  {['soft','hard'].map((ele) => (
      <button 
      key={ele}
      type='button' className={`btn ${setBg(ele)} 
      ${setTabsAlignment(ele)}`}
  onClick={()=>setActiveTab(ele)}>
      {ele} Skills
  </button>
  ))}
 </div>)
 const content =(
  <ul className={`flex flex-row flex-wrap 
       content-start list-none py-4 gap-2 ${
        activeTab=== 'soft'? 'justify-start' : 'justify-end'
       }`}>
        {data[activeTab].map(({icon, text}:any )=> (
        <li key={text} className='skill'>
            <span>{icon}</span>{text} 
        </li>
       ))}
       </ul>

 )
   return (
    <div> 
     {tab}
       {content}

    </div>
  )
}  
  