'use client';

import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import MyButton from '../utils/MyButton';

// Define the Discount component
const Discount: React.FC = () => {
    const [discountStart, setDiscountStart] = useState<number>(0);
    const discountEnd: number = 30;

    const increasePercentage = () => {
        if (discountStart < discountEnd) {
            setDiscountStart((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            increasePercentage();
        }, 30);

        return () => clearTimeout(timer);
    }, [discountStart]);

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl p-4 bg-gray-100 rounded-lg shadow-lg">
                <motion.div
                    initial={
                        {
                            opacity: 0
                        }
                    }
                    animate={
                        {
                            opacity: 1
                        }
                    }
                    transition={
                        {
                            duration: 1
                        }
                    }
                    onAnimationComplete={increasePercentage}
                >
                    <div className="text-4xl font-bold text-yellow-600 flex justify-center items-baseline mb-4">
                        <span>{discountStart} % </span>
                        <span
                            className="ml-2 text-xl"> OFF </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={
                        {
                            x: 300
                        }
                    }
                    animate={
                        {
                            x: 0
                        }
                    }
                    transition={
                        {
                            type: 'spring', stiffness:
                                120, damping:
                                20
                        }
                    }
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800"> Purchase
                            Ticket
                            before
                            today </h3>
                        <p
                            className="text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque aut
                            quia, officia culpa officiis earum voluptatum quis reprehenderit
                            quibusdam sit harum soluta illum consequuntur. Temporibus quis eos
                            vero, delectus voluptatem?
                        </p>
                        <MyButton
                            text="Purchase tickets"
                            bck="#faa800"
                            color="#ffffff"
                            link="http://google.com"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Discount;