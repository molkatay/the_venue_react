"use client";
import HeroSection from "./components/sections/HeroSection";
import BrandNames from "@/app/components/sections/BrandNames";
import FeatureSection from "@/app/components/sections/FeatureSection";
import EventSection from "@/app/components/sections/EventSection";
import NextWebFlowSection from "@/app/components/sections/NextWebFlowSection";
import PricingSection from "@/app/components/sections/PricingSection";
import LevelUpSection from "@/app/components/sections/LevelUpSection";
import Footer from "@/app/components/sections/Footer";
import {useEffect} from "react";
import {FetchApiService} from "@/app/services/FetchApiNavService";


// Define types for the IntersectionObserver callback
interface IntersectionObserverEntry {
    target: Element;
    isIntersecting: boolean;
}


export default async function Home(): JSX.Element {

    useEffect(() => {
        const allSections = document.querySelectorAll<HTMLElement>('.section');
        const revealSection = function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            const [entry] = entries;

            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section-hidden');
            observer.unobserve(entry.target);
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.15,
        });

        allSections.forEach(section => {
            sectionObserver.observe(section);
            section.classList.add('section-hidden');
        });
    }, []);

    return (
        <main>
            <HeroSection />
            <BrandNames />
            <FeatureSection />
            <EventSection />
            <NextWebFlowSection />
            <PricingSection />
            <LevelUpSection />
            <Footer />
        </main>
    );
}

