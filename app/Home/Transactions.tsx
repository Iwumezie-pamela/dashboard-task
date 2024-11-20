'use client'
import {  ArrowRightLeft, ChevronDown, EllipsisVertical, MoveDown, MoveUp } from 'lucide-react'
import { useTheme } from 'next-themes';
import React from 'react'
import { LineChart, Line,  XAxis, YAxis, Tooltip } from 'recharts';

function Transactions() {
    const data = [
        {name: 'Page A', uv: 400, pv: 2000, amt: 2800}, 
        {name: 'Page B', uv: 500, pv: 1000, amt: 4000}, 
        {name: 'Page C', uv: 200, pv: 2600, amt: 2600}, 
        {name: 'Page D', uv: 100, pv: 3400, amt: 3400}, 
        {name: 'Page E', uv: 700, pv: 2900, amt: 2400}, 
    ]

    const {theme} = useTheme()
    return (
        <section className='flex md:flex-row flex-col justify-between gap-10 rounded-lg mb-10'>
<div className="w-full md:w-[50%] lg:w-[60%] shadow-lg p-4">
    <div className="mb-5 flex items-center justify-between">
        <h2 className="font-medium text-lg">Recent Transactions</h2>
        <p className="text-[#666] cursor-pointer text-sm">See all</p>
    </div>

    <div className="flex flex-col gap-6 overflow-x-auto hideScrollBar">
        {/* Each Transaction */}
        {[
            {
                icon: <MoveUp color="pink" />,
                title: "Sent GBP",
                details: "Sent to John Doe",
                time: "Today, 13:30",
                amount: "- ₦1,000,000",
                amountClass: "text-red-600",
            },
            {
                icon: <ArrowRightLeft color="pink" />,
                title: "Exchanged GBP ↔ NGN",
                details: "Sent to John Doe",
                time: "Today, 13:30",
                amount: "- £1,000 / + ₦200,000",
                amountClass: "text-red-600",
            },
            {
                icon: <MoveDown color="lightGreen" />,
                title: "Receive GBP ↔ NGN",
                details: "Sent to John Doe",
                time: "Today, 13:30",
                amount: "+ ₦200,000",
                amountClass: "text-green-600",
            },
            {
                icon: <MoveDown color="lightBlue" />,
                title: "Withdraw GBP",
                details: "Sent to John Doe",
                time: "Today, 13:30",
                amount: "+ ₦200,000",
                amountClass: "text-green-600",
            },
        ].map((transaction, index) => (
            <div
                key={index}
                className="flex items-center gap-4 justify-start text-sm min-w-[600px]"
            >
                {/* Icon and Title */}
                <div className="flex items-center gap-3 w-[25%]">
                    <span className="bg-gray-100 p-2 rounded-lg">
                        {transaction.icon}
                    </span>
                    <h1 className="font-semibold">{transaction.title}</h1>
                </div>

                {/* Details */}
                <p className="text-[#666] font-medium w-[30%]">{transaction.details}</p>

                {/* Time */}
                <p className="text-gray-500 w-[20%]">{transaction.time}</p>

                {/* Amount */}
                <h4 className={`font-medium w-[20%] ${transaction.amountClass}`}>
                    {transaction.amount}
                </h4>

                {/* Action */}
                <span>
                    <EllipsisVertical className="lg:ml-6" />
                </span>
            </div>
        ))}
    </div>
</div>


            <div className="w-full md:w-[50%] lg:w-[40%] shadow-lg p-4 ">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className='font-medium text-lg'>Money out/Money in</h2>
                    <p className='text-[#666] bg-gray-100 px-2 py-1 flex items-center justify-between cursor-pointer text-sm'>Date Range <ChevronDown width={20} height={20} className='ml-2 cursor-pointer' /></p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                        <div className='h-[14px] w-[14px] rounded bg-orange-400' />
                        <p className='text-[#666] text-xs'>Money in <span className='font-medium text-black'>&#x20A6;1,000,000</span></p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='h-[14px] w-[14px] rounded bg-red-500' />
                        <p className='text-[#666] text-xs'>Money out <span className='font-medium text-black'>&#x20A6;1,000,000</span></p>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line className='text-sm' type="monotone" dataKey="uv" stroke="#8884d8" />
                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                        <XAxis className={`text-sm ${theme == 'dark' ? 'text-black' : ''}`} dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </section>
    )
}

export default Transactions