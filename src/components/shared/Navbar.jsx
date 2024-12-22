import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import logoWhite from "../../assets/site-logo-white.webp";
import logoBlack from "../../assets/logo-black.webp";
import { CgMenuRight } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchDropdownRef = useRef(null);

    const toggleSearch = () => {
        if (isSearchOpen) {
            // Close the dropdown (top to bottom effect)
            gsap.to(searchDropdownRef.current, {
                y: 10,
                opacity: 0,
                scaleY: 0,
                duration: 0.2,
                ease: "power2.out",
            });
        } else {
            // Open the dropdown (bottom to top effect)
            gsap.to(searchDropdownRef.current, {
                y: 0, 
                opacity: 1,
                scaleY: 1,
                duration: 0.1,
                ease: "power2.out",
            });
        }
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full px-10 py-6 z-40 flex items-center justify-between ${isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
                }`}
        >
            {/* Left: Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src={isDarkMode ? logoWhite : logoBlack}
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </Link>
            </div>

            {/* Middle: Navigation Links */}
            <div className="hidden lg:flex space-x-16 text-[16px] font-normal uppercase">
                <Link
                    to="/"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="hover:text-gray-500 transition duration-300"
                >
                    About
                </Link>
                <Link
                    to="/pages"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Pages
                </Link>
                <Link
                    to="/services"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Services
                </Link>
                <Link
                    to="/team"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Team
                </Link>
                <Link
                    to="/blog"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Blog
                </Link>
                <Link
                    to="/contact"
                    className="hover:text-gray-500 transition duration-300"
                >
                    Contact
                </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4 relative">
                <div className="relative">
                    <button
                        className="p-2 "
                        onClick={toggleSearch}
                    >
                        {isSearchOpen ? (

                            <RxCross2 className="text-[25px]" />
                        ) : (

                            <IoSearch className="text-[25px]" />
                        )}
                    </button>
                    <div
                        ref={searchDropdownRef}
                        className={`absolute top-12 -left-52 w-64 bg-[#F0F0F0] p-4 rounded-md shadow-md origin-top transform opacity-0 transition-all duration-300`}
                    >
                        <input
                            type="text"
                            placeholder="Search.."
                            className={`w-full bg-[#FFFFFF] text-black p-2 rounded-md outline-none border focus:ring-2 focus:ring-gray-400 ${isDarkMode ? "bg-[#2c2c2c] text-white" : "bg-gray-100 text-black"
                                }`}
                        />
                    </div>
                </div>
                <div className="h-7 w-0.5 bg-gray-200"></div>
                <button >
                    <CgMenuRight className="text-[25px]" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
