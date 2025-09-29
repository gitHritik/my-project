import React from 'react'
import logo from "../assets/logo.png";
function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <>
            <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="Wonderla"
                                className="h-10 w-10 rounded-lg"
                            />
                            <div>
                                <h2 className="font-bold text-lg text-gray-800">Wonderla</h2>
                                <p className="text-xs text-gray-500">PARKS AND RESORTS</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-4">
                        {/* Parks */}
                        <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <span className="text-xl">🏰</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">Parks</h3>
                                <p className="text-sm text-gray-500">Explore your favourite Wonderla Park</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/* Resorts */}
                        <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer group">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <span className="text-xl">🏨</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">Resorts</h3>
                                <p className="text-sm text-gray-500">Get a rejuvenating experience at Wonderla Resort</p>
                            </div>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/* Offers & Combos */}
                        <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer group">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                <span className="text-xl">🎯</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">Offers & Combos</h3>
                                <p className="text-sm text-gray-500">Plan The Perfect Day With Exciting Offers</p>
                            </div>
                        </div>

                        {/* Timings And Guidelines */}
                        <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer group">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                <span className="text-xl">⏰</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">Timings And Guidelines</h3>
                                <p className="text-sm text-gray-500">Know The Timings And Other Guidelines</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 space-y-3">
                        <button className="w-full bg-yellow-400 text-blue-900 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2">
                            <span className="text-xl">👥</span>
                            <span>Group Booking</span>
                        </button>
                        <p className="text-xs text-center text-gray-500">Reach Out To Wonderla Team</p>

                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                            <span className="text-xl">🎭</span>
                            <span>Tour Operator Portal</span>
                        </button>
                        <p className="text-xs text-center text-gray-500">Reach Out To Wonderla Team</p>

                        <button className="w-full bg-yellow-400 text-blue-900 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2">
                            <span className="text-xl">📍</span>
                            <span>How To Reach</span>
                        </button>
                        <p className="text-xs text-center text-gray-500">Check Directions, Routes And Locations</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar