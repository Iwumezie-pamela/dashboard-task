import { sectionPadding } from '@/app/styles/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react'
import { ApplicationRoutes } from './constant/applicationRoutes';
import { Icons } from './constant/icons';
import { Settings, UserRoundPlus } from 'lucide-react';

type Props = {
    setMobileNavIsvisible: Dispatch<SetStateAction<boolean>>
    mobileNavIsVisible: boolean
    theme: string | undefined
}

const MobileNavMenu = ({ setMobileNavIsvisible,mobileNavIsVisible,theme }: Props) => {
    const pathname = usePathname();
    return (
        <div className={`fixed w-full h-full ${theme === "dark" ? "bg-black" : "bg-white"} top-0 left-0 lg:hidden ${sectionPadding} ${mobileNavIsVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft'}`}>
            <div className={`flex flex-row justify-between items-center py-4 relative`}>
            <Link href={"/"} className={`${theme === "dark" ? "bg-black" : "bg-white"} md:hidden font-bold text-2xl`}>
                        Clearerpay
                    </Link>
                <span
                    className="items-center justify-center cursor-pointer hover:bg-ga-green-dark2/20 transition-all duration-300 ease-in-out rounded lg:hidden"
                    onClick={() => setMobileNavIsvisible(false)}
                >
                    <Icons.Close />
                </span>
            </div>

            <ul className="flex flex-col items-start p-4 mb-10 gap-8">
                <Link href={ApplicationRoutes.Dashboard} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer  ${pathname == ApplicationRoutes.Dashboard ? "font-semibold" : ""}`}>
                    <li>Dashboard</li>
                </Link>
                <Link href={ApplicationRoutes.Wallet} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer  ${pathname == ApplicationRoutes.Wallet ? "font-semibold" : ""}`}>
                    <li>Wallet</li>
                </Link>
                <Link href={ApplicationRoutes.Merchants} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer  ${pathname == ApplicationRoutes.Merchants ? "font-semibold" : ""}`}>
                    <li>Merchants</li>
                </Link>
                <Link href={ApplicationRoutes.Transactions} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer  ${pathname == ApplicationRoutes.Transactions ? "font-semibold" : ""}`}>
                    <li>Transactions</li>
                </Link>
                <Link href={ApplicationRoutes.Beneficiaries} onClick={() => setMobileNavIsvisible(false)} className={`cursor-pointer  ${pathname == ApplicationRoutes.Beneficiaries ? "font-semibold" : ""}`}>
                    <li>Beneficiaries</li>
                </Link>

           
                <button className={`flex items-center gap-1 text-xs font-normal `}>
                            <UserRoundPlus width={20} height={20} /> Personal account
                        </button>
                        <button className={`flex items-center gap-1 text-xs font-normal`}>
                            <Settings width={20} height={20} /> Settings
                        </button>
            </ul>
              
        </div>
    )
}

export default MobileNavMenu