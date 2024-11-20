'use client'
import { ArrowRightLeft } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

function FxRate() {
    const {theme}= useTheme()
  return (
    <section className='shadow-lg p-4 rounded-lg mb-10'>
        <div className="mb-5 flex items-center justify-between">
        <h2 className='font-bold text-lg'>Fx Rates</h2>
        <p className='text-[#666] cursor-pointer text-sm'>See all</p>
        </div>
        <div className="flex overflow-x-auto hideScrollBar gap-6">
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>USD</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#36;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>GBP</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&pound;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>EUR</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#8364;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>YEN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&yen;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>GBP</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&pound;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>YEN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&yen;1</p>
                </div>  
            </div>
            <div className="flex bg-slate-100  rounded px-4 py-2 gap-3 items-center">
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>NGN</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#x20A6;1,640</p>
                </div>  
              <span><ArrowRightLeft className={`${theme == 'dark' ? 'text-black' : ''}`}/></span>
              <div className="flex flex-col gap-1">
                <p className='font-light text-sm text-[#666]'>USD</p>
                <p className={`font-semibold text-sm ${theme == 'dark' ? 'text-black' : ''}`}>&#36;1</p>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default FxRate