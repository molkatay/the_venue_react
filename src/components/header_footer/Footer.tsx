'use client';

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-red-600 p-4 text-white">
            {/* Fade-in effect using Tailwind CSS transition */}
            <div className="transition-opacity duration-500 delay-500 opacity-100">
                <div className="font-righteous text-2xl mb-2">
                    The Venue
                </div>

                <div className="text-sm">
                    The venue 2018. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
