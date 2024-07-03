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
  


export default function Sidebar() {

  
// Inventor Items
    const inventoryLinks = [
        {
            title: 'Items',
            href: '/dashboard/inventory/items',
        },
        {
            title: 'Item Groups',
            href: '#',
        },
        {
            title: 'Inventory Adjustments',
            href: '#',
        }
    ]

    //SALES ITEMS
    const saleLinks = [
        {
            title: 'customers',
            href: '#',
        },
        {
            title: 'Sales Orders',
            href: '#',
        },

        {
            title: 'Packages',
            href: '#',
        },
        {
            title: 'Shipments',
            href: '#',
        },
        {
            title: 'Invoices',
            href: '#',
        },
        {
            title: 'Sales Receipts',
            href: '#',
        },
        {
            title: 'Payment Received',
            href: '#',
        },
        {
            title: 'Sales Return',
            href: '#',
        },
        {
            title: 'Credit Not',
            href: '#',
        },
    ]
    
           
    


  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50 justify-between fixed'>
    {/* Top */}
    <div className='flex flex-col bg-slate-950 text-slate-50 p-3'>
        {/* Logo */}
        <Link href="#" className='flex space-x-2 items-center p-2'>
            <ShoppingCart/>
            <span className='font-semibold text-xl'>Inventory</span>
        </Link>
    </div>
    
    {/* Nav Links */}
    <nav className='flex flex-col px-3 py-6 '>
       
        {/* home */}
        <Link href="" className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-lg'> 
            <Home className='w-4 h-4' /> 
            <span>Home</span>
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
        <button onClick={()=> setShowDropItems(!showDropItems)} className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <ShoppingBasket className='w-4 h-4' />
            <span>Purchases</span>
        </button>
{/* 
      <div className={`${showDropItems? 'hidden' :'flex transition ease-in-out duration-500'}`}>
            <ul className='flex flex-col ml-8'>
                <li className='dropdowng-item'>Purchases 1</li>
                <li className='dropdowng-item' >Purchases 2</li>
                <li className='dropdowng-item'>Purchases 3</li>
                <li className='dropdowng-item'>Purchases 4</li>
                <li className='dropdowng-item'>Purchases 5</li>
            </ul>
        </div> */}

      

        <Link href="#" className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <Home className='w-4 h-4' />
            <span>Integration</span>
        </Link>
        
        
        <Link href="#" className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <Cable className='w-4 h-4' />
            <span>Integration</span>
        </Link>

        <Link href="#" className='flex items-center space-x-2 text-slate-50 p-2 rounded-lg'> 
            <BarChart4 className='w-4 h-4' />
            <span>Report</span>
        </Link>

        <Link href="#" className='flex items-center  space-x-2 text-slate-50 p-2 rounded-lg'> 
            <File className='w-4 h-4' />
            <span>Document</span>
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
