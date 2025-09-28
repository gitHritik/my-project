const CategorySidebar = ({ active, onSelect }) => {
    const categories = [
        { name: "Land", count: 72, icon: "🎡", bgColor: "bg-yellow-400" },
        { name: "Water", count: 54, icon: "🌊", bgColor: "bg-blue-400" },
        { name: "Kids", count: 35, icon: "🎠", bgColor: "bg-green-400" },
    ];

    return (
        <div className="relative">
            {/* Curved background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-r-[120px] transform -translate-x-8"></div>

            <div className="relative z-10 py-12 pl-12 pr-8">
                <div className="flex flex-col space-y-12">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => onSelect(cat.name)}
                            className={`flex items-center space-x-4 transition-all duration-300 ${active === cat.name ? 'transform scale-110' : 'hover:transform hover:scale-105'
                                }`}
                        >
                            <div className={`w-16 h-16 ${active === cat.name ? 'bg-white' : 'bg-white/80'} rounded-full flex items-center justify-center shadow-lg`}>
                                <span className="text-2xl">{cat.icon}</span>
                            </div>
                            <div className="text-left">
                                <div className={`font-bold text-lg ${active === cat.name ? 'text-blue-900' : 'text-blue-800'}`}>
                                    {cat.name}
                                </div>
                                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {cat.count} Rides
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CategorySidebar;