'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import Navbar from './Navbar';


type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props) {

    const [loaderIsVisible, setLoaderIsVisible] = useState(true);
    const iswindow = typeof window !== 'undefined' ? true : false;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoaderIsVisible(false);
        }
    }, [iswindow]);

    return (
        <>
            {!loaderIsVisible && (
                <>
                    <Navbar />
                    {children}
                </>
            )}
            {loaderIsVisible && (
                <div className='w-[100vw] h-[100vh] min-h-[100vh] grid place-items-center font-bold text-3xl'>
                    <h1 className=''>
                       Clearerpay
                    </h1>
                </div>
            )}
        </>
    )
}