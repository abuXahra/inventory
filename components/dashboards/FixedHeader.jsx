'use client'
import { ChevronDown, CirclePlus, HelpCircle, LayoutGrid, List, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader({newLink}) {
  return (
    <div className='flex justify-between items-center bg-white py-5 px-4'>
   
       <button className='text-lg flex gap-1 items-center'>
        <span>All Items</span>   <ChevronDown className='text-blue-600 w-4 h-4' />
        </button>  
     

     
    <div className="flex space-x-2">
      {/* New */}
            <Link href={newLink} className='p-1 bg-blue-600 rounded-lg shadow-sm shadow-slate-500 flex items-center space-x-2 text-white px-3'>
                <CirclePlus className='text-slate-50 w-4 h-4'/>
                <span>New</span>
            </Link>
     
      {/* Layout */}
      <div className='flex rounded-md overflow-hidden shadow-sm shadow-slate-500'>
        <button className='bg-slate-300 p-2 border-r border-gray-400'><List className='w-4 h-4' /></button>
        <button className='bg-slate-100 p-2 '><LayoutGrid className='w-4 h-4' /></button>
      </div>
      
      {/* More */}
        <button className='bg-gray-100 p-2 rounded-md shadow-sm shadow-slate-500'><MoreHorizontal className='w-4 h-4'/></button>
   
      {/* Help */}
      <button className='bg-orange-400 p-2 rounded-md text-white shadow-sm shadow-slate-500'><HelpCircle className='w-4 h-4'/></button>

    </div>
     </div>
  )
}
