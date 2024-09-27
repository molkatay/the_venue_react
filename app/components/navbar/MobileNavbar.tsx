'use client';

import React, {useState} from "react";
import {MenuIcon, X} from "lucide-react";
import Link from "next/link";

function MobileNavbar() {
    const  [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center justify-between w-full h-12 py-6 pl-4 pr-2 bordr shadow-lg rounded-3x1 border-slate-200
        bg-slate-100/60 shadow-black/5 backdrop-blur-lg dark:border-slate-700 dark:bg-black/70 dark:shadow-black/10">
            <h1 className="font-serif text-2xl font-extrabold">The Venue Spot</h1>
            <div onClick={()=>setIsOpen(!isOpen)} className="px-4 py-2 shadow-lg rounded-3xl bg-slate-100">
                {!isOpen ? <MenuIcon /> : <X />}
            </div>
            {isOpen &&
                <nav className="fixed left-0 h-[20rem] z-20 flex flex-col items-center w-full gap-4 py-4 border shadow-lg rounded-2x1 top-14 border-slate-200 bg-slate-100">
                <Link className="font-bold transition text-slate-600 hover:text-black" href="#About">
                    About
                </Link>
                <Link className="font-bold transition text-slate-600 hover:text-black" href="#Process">
                    Process
                </Link>
                <Link className="font-bold transition text-slate-600 hover:text-black" href="#Work">
                    Work
                </Link>
                <Link className="font-bold transition text-slate-600 hover:text-black" href="#Pricing">
                    Pricing
                </Link>
            </nav>}
        </div>
    );
}

export default MobileNavbar;