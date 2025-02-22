import React, { useState } from 'react';
import './style.css';

import slide1 from './Prancheta 1.png'
import slide2 from './Prancheta 2.png'
import slide3 from './Prancheta 3.png'
import { Link } from 'react-router-dom';

const Slide = () => {
    const images = [
        slide1,
        slide2,
        slide3
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="slider">
                <Link to={`checkout/${currentIndex}`}>
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                </Link>
            </div>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Slide;
