'use client'; // If using Next.js App Router

import React, { useState, useEffect } from 'react';

const TimeUntil: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    });

    const deadline = 'March 26, 2025'; // Adjust the deadline date

    const getTimeUntil = (deadline: string) => {
        const time = Date.parse(deadline) - Date.parse(new Date().toString());
        if (time < 0) {
            console.log('Date passed');
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            setTimeLeft({
                days: days.toString(),
                hours: hours.toString(),
                minutes: minutes.toString(),
                seconds: seconds.toString()
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => getTimeUntil(deadline), 1000);
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [deadline]);

    return (
        <div className="flex flex-col items-center text-white p-4">
            {/* Countdown Top */}
            <div className="text-2xl font-bold mb-4">Event Starts In</div>

            {/* Countdown Bottom */}
            <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                    <div className="text-4xl">{timeLeft.days}</div>
                    <div className="text-sm">Days</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl">{timeLeft.hours}</div>
                    <div className="text-sm">Hours</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl">{timeLeft.minutes}</div>
                    <div className="text-sm">Minutes</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl">{timeLeft.seconds}</div>
                    <div className="text-sm">Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default TimeUntil;
