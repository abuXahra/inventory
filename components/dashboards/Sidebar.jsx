'use client'
import { BaggageClaim, BarChart, BarChart4, Cable, ChevronLeft, CirclePlus, File, Home, Play, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Subscription from './Subscription'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import CollapsibleLink from './CollapsibleLink'
import SidebarDropdownLink from './SidebarDropdownLink'
import { usePathname } from 'next/navigation'
  


export default function Sidebar() {

    // making a route active
    const pathname = usePathname();

// Inventor Items
    const inventoryLinks = [
        {
            title: 'Items',
            href: '/dashboard/inventory',
            addButtonHref: '/dashboard/inventory/items/new'
        },
        {
            title: 'Item Groups',
            href: '#',
            addButtonHref: "#"
        },
        {
            title: 'Inventory Adjustments',
            href: '#',
            addButtonHref:"#"
        }
    ]

    //SALES ITEMS
    const saleLinks = [
        {
            title: 'customers',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Sales Orders',
            href: '#',
            addButtonHref:"#"
        },

        {
            title: 'Packages',
            href: '#',
             addButtonHref:"#"            
        },
        {
            title: 'Shipments',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Invoices',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Sales Receipts',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Payment Received',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Sales Return',
            href: '#',
            addButtonHref:"#"
        },
        {
            title: 'Credit Not',
            href: '#',
            addButtonHref:"#"            
        },
    ]
    
           
    


  return (
    // overflow-hidden
    // <div className='w-60 h-full overflow-y-auto flex flex-col bg-slate-800 text-slate-50 justify-between fixed scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
    <div className='w-60 min-h-screen overflow-y-auto  flex flex-col bg-slate-800 text-slate-50 justify-between fixed'>
    {/* Top */}
    <div className='flex flex-col bg-slate-950 text-slate-50 p-3'>
        {/* Logo */}
        <Link href="/dashboard/home/overview" className='flex space-x-2 items-center p-2'>
            <ShoppingCart/>
            <span className='font-semibold text-xl'>Inventory</span>
        </Link>
    </div>
    
    {/* Nav Links */}
    <nav className='flex flex-col px-3 py-6 gap-2'>
       

    {/* pathname === navItem.href
                ? " py-1 border-b-2 border-blue-600"
                : "py-1" */}


        {/* home */}
        <Link href="/dashboard/home/overview" className={pathname === "/dashboard/home/overview" ? `${'flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-lg'}`: `${'flex items-center space-x-2 text-slate-50 p-2 rounded-lg'}`}> 
            <Home className='w-4 h-4' /> 
            <span className='text-sm'>Home</span>
        </Link>
        
        {/* Sidebar Dropdown callapsible components  */}

        {/* Inventory Item list */}
                <SidebarDropdownLink 
                    title={'Inventory'}
                    icon={BaggageClaim }
                    items={inventoryLinks}
                />

{/* Sales Item list */}
        {/* Sidebar Dropdown callapsible components  */}
        <SidebarDropdownLink 
                    title={'Sales'}
                    icon={ShoppingBag }
                    items={saleLinks}
                />
  

        {/* inventory */}
        <button  className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <ShoppingBasket className='w-4 h-4' />
            <span className='text-sm'>Purchases</span>
        </button>

    
        
        
        <Link href="#" className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <Cable className='w-4 h-4' />
            <span className='text-sm'>Integration</span>
        </Link>

        <Link href="#" className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <BarChart4 className='w-4 h-4' />
            <span className='text-sm'>Report</span>
        </Link>

        <Link href="#" className='flex items-center  space-x-2 text-slate-50 p-2 rounded-lg'> 
            <File className='w-4 h-4' />
            <span className='text-sm'>Document</span>
        </Link>
        </nav>

         {/* subscription */}
        <Subscription/>

    {/* Bottom*/}
 <div className="flex flex-col">
    <button className="bg-slate-950 justify-center flex space-x-2 p-2 cursor-pointer text-slate-50">
            <ChevronLeft/>
    </button>
 </div>

  
    {/* Footer */}
</div>
  )
}
