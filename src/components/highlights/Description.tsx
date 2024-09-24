'use client';

import { motion } from 'framer-motion';
import React from "react";

const Description: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="center_wrapper text-center"
        >
            <h2 className="text-3xl font-bold mb-4">Highlights</h2>
            <div className="hightlight_description text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore maxime repellendus numquam recusandae aperiam, veniam, exercitationem odit, voluptatum velit saepe repellat qui animi. Ipsum nulla non culpa, nemo, ipsa quos.
            </div>
        </motion.div>
    );
};

export default Description;
