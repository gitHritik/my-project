const RideCard = ({ ride }) => {
    return (
        <>

            <div className="relative w-[260px] md:w-[280px] rounded-2xl overflow-hidden shadow-md group cursor-pointer bg-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                    <img
                        src={ride.image}
                        alt={ride.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-extrabold text-xl mb-1 drop-shadow-md">{ride.title}</h3>
                    <p className="text-sm text-gray-200 mb-1">{ride.location}</p>
                    <p className="text-sm mb-4 line-clamp-2 leading-snug">{ride.description}</p>
                    <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 hover:shadow-lg transition-colors duration-300">
                        RIDE DETAILS
                    </button>
                </div>
            </div>

        </>

    );
};
export default RideCard;

