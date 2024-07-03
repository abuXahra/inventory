
'use client'
import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'
import { Play } from 'lucide-react'

// SIDEBAR DROPDOWN

export default function SidebarDropdownLink({title, items, icon: Icon}) {

    const [showDropItems, setShowDropItems] = useState(false)
    const [hasBgColor, setHasBgColor] = useState(false)

    const handleClick = () =>{
        setShowDropItems(!showDropItems),
        setHasBgColor(!hasBgColor)
    }

  return (
    <Collapsible>
            <CollapsibleTrigger>     
                <div onClick={handleClick} className={ hasBgColor ? `flex bg-slate-900 items-center  justify-between mb-1  space-x-2 text-slate-50 p-2 rounded-lg w-[215px] hover:bg-slate-900` : `flex bg-none items-center  justify-between mb-1  space-x-2 text-slate-50 p-2 rounded-lg w-[215px] hover:bg-slate-900`}>
                  <div className='flex items-center  space-x-2'>
                  {<Icon className='w-4 h-4' />}
                    <span>{title}</span>
                </div>  
                <Play className={ showDropItems ? `w-3 h-3 rotate-90  transition duration-300` : `w-3 h-3 rotate-0 transition duration-300`}/>
                </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
            {
                items.map((item, i)=>(<CollapsibleLink title={item.title} href={item.href} key={i}/>))
            }
            </CollapsibleContent>
        </Collapsible>

  )
}
