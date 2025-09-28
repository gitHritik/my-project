import { useState, useEffect, useCallback } from "react";
import CarouselControls from "./CarouselControls";

const Carousel = ({ items, itemsPerSlide = 3, interval = 3000, autoScroll = true }) => {
    const [current, setCurrent] = useState(itemsPerSlide); // start at first real slide
    const [isPaused, setIsPaused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Clone first & last slides based on itemsPerSlide
    const slides = [
        ...items.slice(-itemsPerSlide),
        ...items,
        ...items.slice(0, itemsPerSlide)
    ];

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(prev => prev + 1);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent(prev => prev - 1);
    }, [isAnimating]);

    // Auto scroll
    useEffect(() => {
        if (!autoScroll || isPaused || items.length <= itemsPerSlide) return;
        const timer = setInterval(handleNext, interval);
        return () => clearInterval(timer);
    }, [handleNext, interval, autoScroll, isPaused, items.length, itemsPerSlide]);

    // Reset after reaching clones
    useEffect(() => {
        const totalSlides = slides.length;
        const resetTimeout = setTimeout(() => setIsAnimating(false), 700);

        if (current >= totalSlides - itemsPerSlide) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurrent(itemsPerSlide); // real first
            }, 700);
        }

        if (current < itemsPerSlide) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurrent(totalSlides - 2 * itemsPerSlide); // real last
            }, 700);
        }

        return () => clearTimeout(resetTimeout);
    }, [current, slides.length, itemsPerSlide]);

    const slideWidth = 100 / slides.length;

    return (
        <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-900"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slider */}
            <div className="relative h-64 sm:h-96">
                <div
                    className={`flex h-full ${isAnimating ? "transition-transform duration-700 ease-in-out" : ""}`}
                    style={{
                        transform: `translateX(-${current * slideWidth}%)`,
                        width: `${slides.length * 100}%`,
                    }}
                >
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0"
                            style={{ width: `${100 / slides.length}%` }}
                        >
                            <img
                                src={item}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-5 w-full flex justify-center">
                <CarouselControls onPrev={handlePrev} onNext={handleNext} />
            </div>
        </div>
    );
};

export default Carousel;
