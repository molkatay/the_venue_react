'use client'; // For Next.js 13+ App Router

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carrousel: React.FC = () => {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        // Set initial window height
        setWindowHeight(window.innerHeight);

        // Update height on window resize
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
    };

    return (
        <div
            className="relative overflow-hidden"
            style={{ height: `${windowHeight}px` }}
        >
            <Slider {...settings}>
                <div>
                    <div className="relative" style={{ height: `${windowHeight}px` }}>
                        <Image
                            src={slide_one}
                            alt="Slide One"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
                <div>
                    <div className="relative" style={{ height: `${windowHeight}px` }}>
                        <Image
                            src={slide_two}
                            alt="Slide Two"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
                <div>
                    <div className="relative" style={{ height: `${windowHeight}px` }}>
                        <Image
                            src={slide_three}
                            alt="Slide Three"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;
