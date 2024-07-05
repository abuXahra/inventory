
'use client'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

// SIDEBAR DROPDOWN ITEMS
export default function CollapsibleLink({href, title, addButtonHref }) {

  const pathname = usePathname();
  
  const[showItem, setShowItem] = useState(false)

  return (
    <div    
        onMouseEnter={()=>{setShowItem(true)}}
        onMouseLeave={()=>{setShowItem(false)}}
     className={ pathname === href ? 'flex justify-between mt-1 items-center pr-2 bg-blue-600 text-slate-50 py-2 pl-8 rounded-lg transition-all duration-300':
      'flex justify-between mt-1 items-center pr-2 hover:bg-slate-900 text-slate-50 py-2 pl-8 rounded-lg transition-all duration-300'
     }>
      <Link href={href}> 
            <span className='text-sm'>{title}</span> 
        </Link>
        <Link href={addButtonHref}><CirclePlus className={ showItem ? `${'text-slate-50 w-4 h-4'}`: `${'hidden'}`}/></Link>
    </div>
  
  )
}
