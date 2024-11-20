"use client";
import {
    useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectionPadding } from "../styles/styles";
import { ApplicationRoutes } from "./constant/applicationRoutes";
import { Icons } from "./constant/icons";
import MobileNavMenu from "./MobileNavMenu";
import { useTheme } from "next-themes";
import { MoonStar, Sun, UserRoundPlus, Settings, ChevronDown } from "lucide-react";


const Navbar = () => {
    const pathname = usePathname();

    const [mobileNavIsVisible, setMobileNavIsvisible] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <nav className={`w-full z-50 select-none fixed top-0`}>
            <div className={`${sectionPadding} flex items-center pt-4 pb-3 lg:pb-0 border-b-[1px] ${theme === 'dark' ? 'border-b-gray-800 bg-black' : 'border-b-gray-200 bg-white'} justify-between`}>
                <Link href={"/"} className=" font-bold text-2xl lg:hidden">
                    Clearerpay
                </Link>
                <div className='hidden lg:flex lg:flex-row lg:gap-7 lg:items-center lg:justify-between lg:w-full lg:text-sm'>
                    <Link href={"/"} className="font-bold text-2xl">
                        Clearerpay
                    </Link>

                    <ul className='flex gap-10 pt-5 text-base'>
                        <Link href={ApplicationRoutes.Dashboard} className={`cursor-pointer text-sm pb-4 ${pathname == ApplicationRoutes.Dashboard ? `font-semibold border-b-[1px]   ${theme === 'dark' ? 'border-b-gray-400' : 'border-b-gray-600'}` : "font-light"}`}>
                            <li>Dashboard</li>
                        </Link>
                        <Link href={ApplicationRoutes.Wallet} className={`cursor-pointer text-sm ${pathname == ApplicationRoutes.Wallet ? `font-semibold border-b-[1px]  ${theme === 'dark' ? 'border-b-gray-400' : 'border-b-gray-600'}` : "font-light"}`}>
                            <li>Wallet</li>
                        </Link>
                        <Link href={ApplicationRoutes.Merchants} className={`cursor-pointer text-sm ${pathname == ApplicationRoutes.Merchants ? `font-semibold border-b-[1px]  ${theme === 'dark' ? 'border-b-gray-400' : 'border-b-gray-600'}` : "font-light"}`}>
                            <li>Merchants</li>
                        </Link>

                        <Link href={ApplicationRoutes.Transactions} className={`cursor-pointer text-sm ${pathname == ApplicationRoutes.Transactions ? `font-semibold border-b-[1px]  ${theme === 'dark' ? 'border-b-gray-400' : 'border-b-gray-600'}` : "font-light"}`}>
                            <li>Transactions</li>
                        </Link>
                        <Link href={ApplicationRoutes.Beneficiaries} className={`cursor-pointer text-sm ${pathname == ApplicationRoutes.Beneficiaries ? `font-semibold border-b-[1px]  ${theme === 'dark' ? 'border-b-gray-400' : 'border-b-gray-600'}` : "font-light"}`}>
                            <li>Beneficiaries</li>
                        </Link>
                    </ul>
                    <div className="flex items-center gap-3">
                        <span
                            role="button"
                            tabIndex={0}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        >
                            {theme === "light" ? <MoonStar /> : <Sun />}
                        </span>

                        <button className={`flex items-center gap-1 text-xs font-normal px-2 py-1 rounded-full ${theme === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
                            <UserRoundPlus width={20} height={20} /> Personal account <ChevronDown width={20} height={20} />
                        </button>
                        <button className={`flex items-center gap-1 text-xs font-normal px-2 py-1 rounded-full ${theme === "dark" ? " text-white" : " text-black"}`}>
                            <Settings width={20} height={20} /> Settings
                        </button>
                    </div>
                </div>

            <div className="flex items-center gap-2 lg:hidden">
            <span
                    role="button"
                    tabIndex={0}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "light" ? <MoonStar /> : <Sun />}
                </span>
                <button className="p-1 rounded lg:hidden" onClick={() => setMobileNavIsvisible(true)}>
                    <Icons.Hamburger />
                </button>
            </div>

                {mobileNavIsVisible && <MobileNavMenu theme={theme} setMobileNavIsvisible={setMobileNavIsvisible} mobileNavIsVisible={mobileNavIsVisible} />}
            </div>
        </nav>
    );
};

export default Navbar;
