'use client';

import React, {useEffect} from "react";
import DesktopNav from "../navbar/DesktopNav";
import MobileNavbar from "../navbar/MobileNavbar";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const testimonials = [
    {
        quote: "A fantastic venue for our tech conference!",
        name: "Alex T."
    },
    {
        quote: "Perfect for networking and innovation!",
        name: "Priya M."
    },
    {
        quote: "Great facilities for our hackathon!",
        name: "Liam K."
    }
];




function HeroSection() {
    const [index, setIndex] = React.useState(0)
    const [testimonial, setName] = React.useState(testimonials[index]);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextIndex = (index + 1) % testimonials.length;
            setIndex(nextIndex);
            setName(testimonials[nextIndex]);
        }, 1500);
        return () => clearInterval(timer)
    }, [index])
    return (
        <section className="px-4 md:h-screen md:py-4 md:px-36 bg-slate-400 hero-section">
            <div className="flex items-center justify-between md:pt-[2rem]">
                <h1 className="hidden font-serif text-4xl font-extrabold md:block">The Venue Spot</h1>
                <div className="hidden md:block">
                    <DesktopNav/>
                </div>
                <div className="fixed w-full py-4 mt-4 md:hidden top-[10px] left-0 z-50">
                    <MobileNavbar/>
                </div>
            </div>

            <div className="max-w-[31rem] mt-28">
                <div className="my-4">
                    <span className="mr-4 text-indigo-500">
                        MEMBERSHIP
                    </span>
                    <span className="text-slate-300">///</span>
                </div>
                <h1 className="mb-8 text-3x1 font-extrabold md:text-5xl">
                    Innovate & Inspire at at The Venue Spot
                </h1>
                <p className="mb-8">
                    The Ultimate Venue for Technology Events, Conferences, and Workshops
                </p>


                <div className="flex gap-4">
                    <Button className="text-white transition bg-indigo-500 shadow hover:bg-indigo-600 rounded-3xl shadow-indigo-500/25
            focus:outline-none focus:ring-1 focus:ring-white/30">Plan Your Tech Event <ArrowRight size={20}/> </Button>
                    <Button variant="scondary"
                            className="transition border-2 rounded-3x1 shadow-indigo-500/25 hover:border-slate-300">Explore Upcoming Tech Events</Button>
                </div>
                <div className="items-center gap-4 mt-6 md:flex">
                    <div className="flex mb-2">
                        <Image src="/img-1.jpg"
                               className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
                               width={55} height={55} alt="builders-img"/>
                        <Image src="/img-2.jpg"
                               className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
                               width={55} height={55} alt="builders-img"/>
                        <Image src="/img-3.jpg"
                               className="object-center bg-cover border-white ml-[-12px] rounded-full border-2"
                               width={55} height={55} alt="builders-img"/>
                        <span className={"font-bold"}>+1000</span>
                    </div>
                </div>
                <p className="text-slate-500">Trusted</p>
                <p className="font-bold animate-bounce">{testimonial.quote} - {testimonial.name}</p>

            </div>

        </section>
    );
}

export default HeroSection