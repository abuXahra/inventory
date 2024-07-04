

import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// SIDEBAR DROPDOWN ITEMS
export default function CollapsibleLink({href, title }) {
  return (
    <Link href={href} className='flex justify-between mt-1 items-center pr-2 hover:bg-slate-900 text-slate-50 py-2 pl-8 rounded-lg transition-all duration-300'> 
        <span className='text-sm'>{title}</span> 
        <CirclePlus className='text-slate-50 w-4 h-4'/>
    </Link>
  )
}
