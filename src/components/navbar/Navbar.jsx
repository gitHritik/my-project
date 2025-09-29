
import logo from "../../assets/logo.png";
import { useState } from 'react';
import SideBar from "../SideBar";
const Navbar = () => {
    const navLinks = [
        { name: "LOCATIONS", href: "/locations" },
        { name: "OFFERS", href: "/offers" },
        { name: "RIDES", href: "/rides" },
        { name: "RESTAURANTS", href: "/restaurants" },
        { name: "EVENTS", href: "/events" },
    ];
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="sticky top-6 z-50 flex justify-center">
            <nav className="flex items-center justify-between w-[90%] md:w-[80%] bg-white rounded-2xl shadow-xl border border-gray-200 px-6 py-3">

                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Wonderla Logo" className="h-10 w-auto" />
                </a>

                {/* Links */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-700 font-semibold hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right buttons */}
                <div className="flex items-center space-x-4">
                    <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors shadow-md">
                        BOOK TICKETS
                    </button>

                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="text-gray-800 hover:text-blue-600 p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>


                    {/* Mobile Menu */}
                    <button className="md:hidden text-gray-700 hover:text-blue-600">
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </header>
    );
};

export default Navbar;
