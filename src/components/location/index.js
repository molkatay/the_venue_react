import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.849332029937!2d28.9763369293267!3d41.03701760405047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sTaksim+Square%2C+G%C3%BCm%C3%BC%C5%9Fsuyu+Mahallesi%2C+34437+Beyo%C4%9Flu%2FIstanbul%2C+Turkey!5e0!3m2!1sen!2sci!4v1544023740351" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen
            ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;