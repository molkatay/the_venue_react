'use client'; // If using Next.js App Router

import React from 'react';
import { scroller } from 'react-scroll';

interface SideDrawerProps {
    open: boolean;
    onClose: (value: boolean) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ open, onClose }) => {
    const scrollToElement = (element: string) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,
        });
        onClose(false);
    };

    return (
        <div className={`fixed inset-0 z-50 transition-transform transform ${open ? 'translate-x-0' : 'translate-x-full'} bg-gray-800 bg-opacity-75`}>
            <div className="absolute top-0 right-0 bg-white w-64 h-full shadow-lg">
                <div className="p-4">
                    <button className="text-gray-500" onClick={() => onClose(false)}>
                        Close
                    </button>
                    <nav className="mt-4">
                        <ul>
                            <li className="my-2">
                                <button className="text-left w-full" onClick={() => scrollToElement('featured')}>
                                    Event Starts in
                                </button>
                            </li>
                            <li className="my-2">
                                <button className="text-left w-full" onClick={() => scrollToElement('venuenfo')}>
                                    Venue NFO
                                </button>
                            </li>
                            <li className="my-2">
                                <button className="text-left w-full" onClick={() => scrollToElement('highlights')}>
                                    Highlights
                                </button>
                            </li>
                            <li className="my-2">
                                <button className="text-left w-full" onClick={() => scrollToElement('pricing')}>
                                    Pricing
                                </button>
                            </li>
                            <li className="my-2">
                                <button className="text-left w-full" onClick={() => scrollToElement('location')}>
                                    Location
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideDrawer;
