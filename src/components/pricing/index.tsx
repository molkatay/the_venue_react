import React from 'react';
import MyButton from '../utils/MyButton';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
    const prices = [100, 150, 250];
    const positions = ['Balcony', 'Medium', 'Gold'];
    const desc = [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio recusandae molestias nam dignissimos sunt, expedita qui tempora quisquam ducimus quibusdam quaerat temporibus laudantium corrupti fugiat hic sequi. Illum, necessitatibus!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio recusandae molestias nam dignissimos sunt, expedita qui tempora quisquam ducimus quibusdam quaerat temporibus laudantium corrupti fugiat hic sequi. Illum, necessitatibus!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio recusandae molestias nam dignissimos sunt, expedita qui tempora quisquam ducimus quibusdam quaerat temporibus laudantium corrupti fugiat hic sequi. Illum, necessitatibus!'
    ];
    const linkto = [
        'http://sales/b',
        'http://sales/m',
        'http://sales/s'
    ];
    const delay = [0.5, 0, 0.5];

    const showBoxes = () => (
        prices.map((price, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                animate={{ opacity: 1, y: 0 }} // Animation state
                transition={{ duration: delay[i] }} // Transition duration
                className="p-4 bg-gray-800 text-white rounded-lg shadow-lg m-4"
            >
                <div className="p-6">
                    <div className="text-2xl font-bold mb-2">
                        <span>${price}</span>
                        <span className="ml-2">{positions[i]}</span>
                    </div>
                    <div className="mb-4">
                        {desc[i]}
                    </div>
                    <div>
                        <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={linkto[i]}
                        />
                    </div>
                </div>
            </motion.div>
        ))
    );

    return (
        <div className="bg-black py-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl text-white mb-8">Pricing</h2>
                <div className="flex flex-wrap justify-center">
                    {showBoxes()}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
