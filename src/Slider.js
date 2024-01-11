/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from 'react';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    useEffect(() => {
        const nextSlide = () => {

            setCurrentIndex((currentIndex + 1) % images.length);

        };
        const intervalId = setInterval(nextSlide, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentIndex, images]);

    return (
        <div className="icl">
            <button onClick={goToPrevSlide} className="cbtn pv">
                &lt;
            </button>
            <img src={images[currentIndex]} alt={`source ${currentIndex}`} />
            <button onClick={goToNextSlide} className="cbtn nt">
                &gt;
            </button>
        </div>
    );
};

export default Slider;