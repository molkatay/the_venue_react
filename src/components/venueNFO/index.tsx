import React from 'react';
import { motion } from 'framer-motion';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNfo = () => {
    const zoomInVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 }
    };

    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <motion.div
                        className="vn_item"
                        variants={zoomInVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    >
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_calendar})`,
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_description">
                                    7 August 2019 @ 10:00 PM
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="vn_item"
                        variants={zoomInVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.5 }} // Add delay for the second item
                    >
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_location})`,
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_description">
                                    Tunisia
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default VenueNfo;
