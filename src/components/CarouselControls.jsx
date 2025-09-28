const CarouselControls = ({ onPrev, onNext }) => {
    return (
        <div className="flex space-x-3">
            <button
                onClick={onPrev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 transition-colors shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={onNext}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 transition-colors shadow-lg"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};
export default CarouselControls;    