import React, { useState } from "react";
import { rides } from "../ridesData";
import Navbar from './navbar/Navbar';
import CategorySidebar from './CategorySidebar';
import RideCard from './RideCard';
import CarouselControls from './CarouselControls';




const RidesSection = () => {
    const [activeCategory, setActiveCategory] = useState("Land");
    const [currentIndex, setCurrentIndex] = useState(0);




    const filteredRides = rides.filter((r) => r.category === activeCategory);
    const itemsPerSlide = 3;
    const maxIndex = Math.max(0, filteredRides.length - itemsPerSlide);

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
                    <div className="w-80 py-16">
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
                            <div
                                className="flex transition-transform duration-700"
                                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
                            >
                                <div className="grid grid-cols-3 gap-8 mb-12">
                                    {filteredRides.slice(currentIndex, currentIndex + itemsPerSlide).map((ride) => (
                                        <RideCard key={ride.id} ride={ride} />
                                    ))}
                                </div>
                            </div>
                        </div>





                        {/* Controls and Button */}
                        <div className="flex justify-between items-center">
                            <CarouselControls onPrev={handlePrev} onNext={handleNext} />
                            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-xl">
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