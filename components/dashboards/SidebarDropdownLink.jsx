
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
    
            <CollapsibleTrigger onClick={handleClick} className={ hasBgColor ? `justify-between items-center w-full flex bg-slate-900 rounded-lg hover:bg-slate-900 pr-2 ` : 
              `justify-between items-center w-full flex bg-none rounded-lg hover:bg-slate-900 pr-2 `}> 
            <div className="p-2 flex items-center space-x-2"> 
              {<Icon className='w-4 h-4' />}
                    <span className='text-sm'>{title}</span>
                    </div>
                    <Play className={ showDropItems ? `w-3 h-3 rotate-90  transition duration-300` : `w-3 h-3 rotate-0 transition duration-300`}/>
            </CollapsibleTrigger>
            <CollapsibleContent>
            {
                items.map((item, i)=>(<CollapsibleLink title={item.title} addButtonHref={item.addButtonHref} href={item.href} key={i}/>))
            }
            </CollapsibleContent>
        </Collapsible>

  )
}




