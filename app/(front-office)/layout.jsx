
import React from 'react'

export default function Layout({children}) {
  return (
    <div className='flex'>
         <main className=''>
            {children}
         </main>
    </div>
  )
}
