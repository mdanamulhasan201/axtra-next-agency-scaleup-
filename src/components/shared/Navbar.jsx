import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/site-logo-white.webp";
import logoBlack from "../../assets/logo-black.webp";
import { useSelector } from "react-redux";

const Navbar = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

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
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded hover:bg-gray-200 hover:bg-opacity-20 transition duration-300">
                    <FaSearch className="text-lg" />
                </button>
                <div className="h-7 w-0.5 bg-gray-200">

                </div>
                <button className="p-2 rounded hover:bg-gray-200 hover:bg-opacity-20 transition duration-300">
                    <FaBars className="text-lg" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
