"use client"
import FixedHeader from '@/components/dashboards/FixedHeader'
import OptionCard from '@/components/dashboards/OptionCard'
import {Boxes, Component, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Inventory() {



  const optionCards = [
      {
        title: "Items",
        description:"Create standalone items and Service that you buy and sell",
        link: "/dashboard/inventory/items/new",
        linkTitle: "New Item",
        enabled: "true",
        icon: Shirt,
      },
      {
        title: "Categories",
        description:"Bundle different items together and sell them as kits",
        link: "inventory/categories/new",
        linkTitle: "New Category",
        enabled: "true",
        icon: Boxes,
      },
      {
        title: "Brands",
        description:"Tweak you item prices for specific contacts or transactions",
        link: "/dashboard/inventory/brands/new",
        linkTitle: "New Brands",
        enabled: "true",
        icon: ScrollText,
      },
      {
        title: "Warehouse",
        description:"Tweak you item prices for specific contacts or transactions",
        link: "/dashboard/inventory/warehouse/new",
        linkTitle: "New Warehouse",
        enabled: "true",
        icon: ScrollText,
      },
      {
        title: "Units",
        description:"Tweak you item prices for specific contacts or transactions",
        link: "/dashboard/inventory/units/new",
        linkTitle: "New Units",
        enabled: "true",
        icon: Component,
      }
  ]
    
  

  return (
    <div>
      <FixedHeader newLink={"/dashboard/inventory/items/new"}/>

      <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2  gap-8 py-8 px-16'>
      {/* Option Card */}
      {
        optionCards.map((card, i)=>(
      <OptionCard key={i} optionData={card}/>
        ))
      }
    
      </div>
     </div>
  )
}



// 1:49:40