'use client'; // If using Next.js App Router

import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured: React.FC = () => {
    return (
        <div className="relative">

            {/* Carrousel Component */}
            <Carrousel />

            {/* Artist Name */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <div className="text-5xl font-bold text-center">
                    Ariana Grande
                </div>
            </div>

            {/* Countdown Timer */}
            <TimeUntil />
        </div>
    );
};

export default Featured;
