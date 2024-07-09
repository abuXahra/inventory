

import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FormHeader({title, href}) {
  return (
    <div className="flex item-center justify-between bg-white px-8 py-3">
        <h2 className='font-semibold text-xl'>{title}</h2>
        <Link href={href}><X/></Link>
      </div>
  )
}
