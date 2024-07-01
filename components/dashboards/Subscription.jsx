import Link from 'next/link'
import React from 'react'

function Subscription() {
  return (
    <div className="p-3">
        <div className='py-2 rounded-lg mt-2 bg-slate-900 ' >
        <p className='text-xs border-l-2 rounded-sm border-orange-400 pl-3 mx-3'>Your premium plan's trial expires in <span className='text-orange-400 '>13 days.</span></p>
        <div className='flex border-t border-slate-600 mt-2 w-full'>
            <span className='flex text-xs px-2 pt-1 border-r border-slate-600 '>
                <button>Change Plan</button>    
            </span>
            <span className='text-xs pt-1 pl-4 px-2 flex text-center'> 
               <Link href="#">Upgrade</Link> 
            </span>
        </div>
        
    </div>
    </div>
  )
}

export default Subscription