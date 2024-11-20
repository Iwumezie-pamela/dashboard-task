'use client'
import { Bell, Hand } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'

function TopBar() {
    const { theme } = useTheme();
  return (
    <div className='flex items-center flex-col lg:flex-row gap-3 lg:gap-20 mb-5 lg:mb-10'>
        <p className={`flex items-center gap-1 ${theme == 'dark' ? 'text-gray-200' : 'text-[#666]'}`}>Welcome Andy <Hand/></p>
        <p className='flex items-center bg-red-200 flex-wrap text-center mx-auto text-black py-1 px-2 rounded-md text-[10px] md:text-sm'><Bell width={20} height={20} className='mr-2'/> Your account has been setup for OTC trade, please&nbsp; <strong>Contact OTC </strong>&nbsp; to transact</p>
    </div>
  )
}

export default TopBar