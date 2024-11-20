'use client'
import { ArrowRightLeft, ChevronDown, EllipsisVertical, MoveUp, Plus } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'

function Analytics() {
    const { theme } = useTheme();
    return (
        <section className='flex justify-between lg:flex-row flex-col gap-10 mb-10'>
            <div className="shadow-md w-full lg:w-1/2 flex-1">
              <div className="flex flex-col p-4">
              <div className="flex rounded-lg items-center justify-between mb-1 w-full">
                    <p className={`flex items-center font-medium ${theme == 'dark' ? 'text-white' : 'text-[#333]'}`}>NGN. <span className={`font-light text-sm ${theme == 'dark' ? 'text-[#666]' : 'text-[#666]'}`}>Naira</span> <ChevronDown width={20} height={20} className='ml-2 cursor-pointer' /></p>
                    <p className='flex items-center'><Plus width={20} height={20}/> Deposit</p>
                </div>
                <h2 className='font-semibold text-2xl mb-3'>&#x20A6;34,645,233</h2>
                <div className="flex items-center w-full justify-between lg:justify-normal gap-5">
                    <span className={`flex items-center gap-1 bg-slate-100 rounded px-4 lg:px-6 py-2 text-sm ${theme == 'dark' ? 'text-black' : ''}`}><MoveUp height={20} width={20}/>Send</span>
                    <span className={`flex items-center gap-1 bg-slate-100 rounded px-4 lg:px-6 py-2 text-sm ${theme == 'dark' ? 'text-black' : ''}`}><MoveUp height={20} width={20}/>Receive</span>
                    <span className={`flex items-center gap-1 bg-slate-100 rounded px-4 lg:px-6 py-2 text-sm ${theme == 'dark' ? 'text-black' : ''}`}><ArrowRightLeft/>Swap</span>
                    <EllipsisVertical className='lg:ml-6'/>
                </div>
              </div>
            </div>
            <div className="shadow-md w-full lg:w-1/2 rounded-lg p-4 flex-1">
            <div className="flex flex-col">
            <div className="flex rounded-lg items-center justify-between mb-5 w-full">
                    <p className={`flex items-center font-medium ${theme == 'dark' ? 'text-white' : 'text-[#333]'}`}>Merchants</p>
                    <p className='flex items-center text-sm'><Plus width={20} height={20}/> Add Merchants</p>
                </div>
                <div className="flex items-center gap-5 w-full hideScrollBar overflow-x-auto">
                    {Array.from({length:20},(_,index)=>(
                        <div className="flex flex-col gap-1" key={index}>
                            <p className={`bg-slate-100 rounded-full w-10 h-10 grid place-items-center font-medium ${theme == 'dark' ? 'text-black' : ''}`}>AD</p>
                            <span className='flex whitespace-nowrap text-sm '>Adisa Debo...</span>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Analytics