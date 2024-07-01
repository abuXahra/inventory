import React from 'react'
import { Bell, ChevronDown, CirclePlus, History, LayoutGrid, Plus, Settings, Users } from 'lucide-react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='flex bg-gray-200 h-auto justify-between items-center, px-8 py-1 border-b border-slate-200  shadow-md'>

       <div className='flex gap-2'>
        {/* Recent Activities */}
            <button><History className='w-4 h-4'/></button>
            {/* Search */}
            <SearchInput/>
       </div> 

       <div className='flex gap-3 '>
        {/* Plus iCON: add */}
        <div className='flex items-center gap-3 pr-3 border-r border-gray-300'>
            <button className='p-1 bg-blue-600 rounded-lg'>
                <CirclePlus className='text-slate-50 w-4 h-4'/>
            </button>
        </div>

        
         {/* User iCON: add */}
         <div className='flex  items-center'>
            <button className='p-1  hover:bg-slate-200 rounded-lg'>
                <Users className='text-slate-900 w-4 h-4'/>
            </button>
        </div>
       
        
        {/* Notification iCON*/}
        <div className='flex  items-center'>
            <button className='  hover:bg-slate-200 rounded-lg'>
                <Bell className='text-slate-900 w-4 h-4'/>
            </button>
        </div>

        
        {/* Setting iCON*/}
        <div className='flex  items-center'>
            <button className='  hover:bg-slate-200 rounded-lg'>
                <Settings className='text-slate-900 w-4 h-4'/>
            </button>
        </div>


    {/* Organization info iCON*/}
        <div className='flex  gap-3'>
            <button className='flex items-center'>
                <span>Garat</span>
                <ChevronDown className='w-3 h-3'/>
            </button>
            <button>
                <Image
                src={"/images/passport.png"}
                alt='user image'
                width={500}
                height={500}
                className='w-9 h-9 
                rounded-full border 
                border-slate-800'
                />
            </button>
            <button>
                <LayoutGrid className='border-slate-800 w-6 h-6 text-slate-900'/>
            </button>
        </div>
            
       </div>
    </div>
  )
}


// 1:23:19


// <div className='flex items-center gap-3 pr-2 border-r border-gray-300'>
// {/* <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button"><CirclePlus /></button> */}
// <button className='p-1 bg-blue-600 rounded-lg'><CirclePlus className='text-slate-50 w-4 h-4'/></button>
// <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
//     Tooltip on bottom
//     <div class="tooltip-arrow" data-popper-arrow></div>
// </div>
// </div>