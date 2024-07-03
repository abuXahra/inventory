
import { ChevronDown, CirclePlus } from 'lucide-react'
import React from 'react'

export default function FixedHeader() {
  return (
    <div className='flex justify-between items-center bg-green-300 py-5 px-4'>
   
       <button className='text-lg flex gap-1 items-center'><span>All Items</span>   <ChevronDown className='text-blue-600 w-4 h-4' /></button>  
     

     
    <div className="flex">
      {/* New */}
            <button className='p-1 bg-blue-600 rounded-lg flex items-center space-x-2 text-white px-3'>
                <CirclePlus className='text-slate-50 w-4 h-4'/>
                <span>New</span>
            </button>
     
      {/* Layout */}
      {/* More */}
      {/* Help */}

    </div>
     </div>
  )
}
