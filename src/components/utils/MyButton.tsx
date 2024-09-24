import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ButtonProps = {
    color: string;
    bck: string;
    link: string;
    text: string;
}

const MyButton = ({ link, bck, color,text }: ButtonProps) => {
    return (
        <motion.a
            href={link}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                background: bck,
                color: color,
                textDecoration: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
        >
            <Image
                src='../../resources/images/icons/ticket.png'
                className="iconImage"
                alt="icon_button"
                width={20}
                height={20}
            />
            <span style={{ marginLeft: '10px' }}>{text}</span>
        </motion.a>
    );
};

export default MyButton;
