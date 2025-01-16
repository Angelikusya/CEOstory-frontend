import './Preloader.css';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import preloaderAnimation from '../../assets/PreloaderAnimation.json';
// import preloaderAnimation2 from '../../assets/PreloaderAnimation2.json';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <Lottie animationData={preloaderAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Preloader;
