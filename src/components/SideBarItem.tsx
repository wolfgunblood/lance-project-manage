"use client"
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';


// type Props = {}

interface SideBarProps {
    icon: LucideIcon,
    label: string,
    href: string

}

const SideBarItem = ({icon : Icon, label, href}: SideBarProps) => {

    const router = useRouter()
    const pathname = usePathname()
    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);
    const handleClick = () => {
        router.push(href);
    }
    return (
        <button
        onClick={handleClick}
        className={cn("flex items-center text-slate-500 pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20"
            , isActive && "bg-sky-200/20 text-sky-700 hover:bg-sky-300/20 hover:text-sky-700"
        )}
        >
            <div className='flex items-center gap-x-2 py-2'>
                <Icon size={22} className={cn("text-gray-500", isActive && "text-blue-500")} />
                {label}
            </div>
            <div className={cn("ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
                isActive && "opacity-100"
            )}></div>
        </button>
    )
}

export default SideBarItem