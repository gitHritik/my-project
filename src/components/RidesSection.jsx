import React, { useState, useEffect } from "react";
import { rides } from "../ridesData";
import Navbar from './navbar/Navbar';
import CategorySidebar from './CategorySidebar';
import RideCard from './RideCard';
import CarouselControls from './CarouselControls';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";




const RidesSection = () => {


    const [activeCategory, setActiveCategory] = useState("Land");
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredRides = rides.filter((r) => r.category === activeCategory);
    const itemsPerSlide = 3;
    const maxIndex = Math.max(0, filteredRides.length - itemsPerSlide);

    console.log(maxIndex)

    //auto scroll featuer
    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 4000); // scroll every 4 seconds

        return () => clearInterval(interval);
    }, [maxIndex, activeCategory]);



    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0); // Reset carousel when category changes
    };

    if (currentIndex * (100 / itemsPerSlide) > 100) {
        setCurrentIndex(0);
    }
    // console.log(currentIndex)
    // console.log((filteredRides.length * 100) / itemsPerSlide)

    return (
        <div className=" bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <section className="bg-gradient-to-br from-[#22304A] via-[#22304A] to-[#22304A] min-h-screen relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-400/5 rounded-full blur-xl"></div>

                <div className="max-w-7xl mx-auto flex min-h-screen">
                    {/* Sidebar */}
                    <div className="w-100 py-16">
                        <CategorySidebar active={activeCategory} onSelect={handleCategoryChange} />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 py-16 pl-8 pr-8">
                        <div className="mb-12">
                            <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">
                                OUR ICONIC RIDES
                            </h2>
                            <div className="w-24 h-1 bg-yellow-400"></div>
                        </div>

                        {/* Cards Grid */}
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex flex-nowrap gap-6"
                                animate={{
                                    x: `-${currentIndex * (100 / itemsPerSlide)}%`
                                }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
                            >

                                {filteredRides.concat(filteredRides).map((ride, index) => (
                                    <RideCard key={index} ride={ride} />
                                ))}

                            </motion.div>
                        </div>

                        {/* Controls and Button */}
                        <div className="flex justify-between items-center mt-6 w-[15%] ">
                            <CarouselControls onPrev={handlePrev} onNext={handleNext} />
                            <button className="bg-yellow-400  text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-xl">
                                Explore All Rides!
                            </button>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
};

export default RidesSection;