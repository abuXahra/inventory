"use client"
import FixedHeader from '@/components/dashboards/FixedHeader'
import OptionCard from '@/components/dashboards/OptionCard'
import {Boxes, Component, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Inventory() {



  const optionCards = [
      {
        title: "Item Groups",
        description:"Create multiple variants of the same item using Item Groups",
        link: "/new",
        linkTitle: "New Item Group",
        enabled: "true",
        icon: Boxes,
      },
      {
        title: "Items",
        description:"Create standalone items and Service that you buy and sell",
        link: "inventory/categories/new",
        linkTitle: "New Item",
        enabled: "true",
        icon: Shirt,
      },
      {
        title: "Composite Items",
        description:"Bundle different items together and sell them as kits",
        link: "/new",
        linkTitle: "New Composite Item",
        enabled: "false",
        icon: Component,
      },
      {
        title: "Price Lists",
        description:"Tweak you item prices for specific contacts or transactions",
        link: "/new",
        linkTitle: "New Item",
        enabled: "false",
        icon: ScrollText,
      }
  ]
    
  

  return (
    <div>
      <FixedHeader newLink={"/dashboard/inventory/items/new"}/>

      <div className='grid grid-col-1 lg:grid-cols-2  gap-8 py-8 px-16'>
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