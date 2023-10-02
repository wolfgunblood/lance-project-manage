"use client"
import { Layout,Receipt } from 'lucide-react'
import React from 'react'
import SideBarItem from './SideBarItem'

type Props = {}

const SideBarRoutes = (props: Props) => {

    const routes =[
        {
            icon: Layout,
            label: 'Dashboard',
            href: '/',
        },
        {
            icon: Receipt,
            label : "Invoice",
            href: '/invoice'
        },
    ]
  return (
    <div className='flex flex-col w-full'>
        {routes.map((route,index) => (
            <SideBarItem 
                key={index}
                icon={route.icon}
                label={route.label}
                href={route.href}
            
            />
        ))}
    </div>
  )
}

export default SideBarRoutes