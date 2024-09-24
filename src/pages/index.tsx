import React from "react";
import Header from "../components/header_footer/Header";
import Footer from "../components/header_footer/Footer";
import Featured from "../components/featured";
import VenueNfo from "../components/venueNFO";
import Highlight from "../components/highlights";
import Pricing from "../components/pricing";
import Location from "../components/location";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Header />

            <div id="featured" className="scroll-element">
                <Featured />
            </div>

            <div id="venuenfo" className="scroll-element">
                <VenueNfo />
            </div>

            <div id="highlights" className="scroll-element">
                <Highlight />
            </div>

            <div id="pricing" className="scroll-element">
                <Pricing />
            </div>

            <div id="location" className="scroll-element">
                <Location />
            </div>

            <Footer />
        </div>
    );
}
