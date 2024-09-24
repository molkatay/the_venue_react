'use client';

import Description from './Description';
import Discount from './Discount';
import React from "react";

const Highlight: React.FC = () => {
    return (
        <div className="highlight_wrapper bg-gray-100 p-8">
            <Description />
            <Discount />
        </div>
    );
};

export default Highlight;
