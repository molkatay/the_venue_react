'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import SideDrawer from './SideDrawer';

const Header: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [headerShow, setHeaderShow] = useState<boolean>(false);

    // Handle scroll to show header background
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true);
        } else {
            setHeaderShow(false);
        }
    };

    // Toggle drawer state
    const toggleDrawer = (value: boolean) => {
        setDrawerOpen(value);
    };

    // Add scroll event listener when the component is mounted
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`fixed w-full z-10 transition-all duration-300 ${
        headerShow ? 'bg-gray-900' : 'bg-transparent'
    } shadow-none py-2 px-4`}
>
    <div className="flex justify-between items-center">
    <div className="header_logo">
    <div className="text-2xl font-bold text-yellow-500">The Venue</div>
    <div className="text-sm text-white">Musical Events</div>
    </div>

    {/* Menu Icon */}
    <button
        aria-label="Menu"
    className="text-white text-2xl"
    onClick={() => toggleDrawer(true)}
>
    <FaBars />
    </button>

    {/* Side Drawer Component */}
    <SideDrawer open={drawerOpen} onClose={() => toggleDrawer(false)} />
    </div>
    </motion.header>
);
};

export default Header;
