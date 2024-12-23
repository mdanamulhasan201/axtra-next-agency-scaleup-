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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const searchDropdownRef = useRef(null);
    const sidebarRef = useRef(null);
    const sidebarRefPh = useRef(null);

    const toggleSearch = () => {
        if (isSearchOpen) {
            gsap.to(searchDropdownRef.current, {
                y: 10,
                opacity: 0,
                scaleY: 0,
                duration: 0.2,
                ease: "power2.out",
            });
        } else {
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

    const toggleSidebar = () => {
        if (isSidebarOpen) {
            // Zoom out animation
            gsap.to(sidebarRef.current, {
                scale: 0.5,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(sidebarRef.current, { display: 'none' });
                }
            });
        } else {
            // Zoom in animation
            gsap.set(sidebarRef.current, {
                display: 'block',
                scale: 0.5,
                opacity: 0
            });
            gsap.to(sidebarRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.1,
                ease: "power2.out"
            });
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSidebarInmobile = () => {
        if (isSidebarOpen) {
            // Zoom out animation
            gsap.to(sidebarRefPh.current, {
                scale: 0.5,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.set(sidebarRefPh.current, { display: 'none' });
                }
            });
        } else {
            // Zoom in animation
            gsap.set(sidebarRefPh.current, {
                display: 'block',
                scale: 0.5,
                opacity: 0
            });
            gsap.to(sidebarRefPh.current, {
                scale: 1,
                opacity: 1,
                duration: 0.1,
                ease: "power2.out"
            });
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full px-5 lg:px-10 py-6 z-40 flex items-center justify-between ${isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
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
                            className="p-2"
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

                    <button onClick={toggleSidebar} className="hidden lg:block">
                        <CgMenuRight className="text-[25px]" />
                    </button>
                    {/* this button only show mobile device  */}
                    <button onClick={toggleSidebarInmobile} className="block lg:hidden">
                        <CgMenuRight className="text-[25px]" />
                    </button>
                </div>
            </nav>

            <div ref={sidebarRefPh}
                className={`fixed block lg:hidden top-0 left-0 w-full h-full ${isDarkMode ? "bg-[#121212] text-white" : "bg-[#121212] text-white"
                    } z-50`}
                style={{ display: 'none' }}>
                <div className="absolute top-5 right-5">
                    <button
                        onClick={toggleSidebarInmobile}
                        className={`p-5 rounded-full ${isDarkMode ? "text-white bg-[#232323]" : "text-white bg-[#232323]"}`}
                    >
                        <RxCross2 className="text-[25px]" />
                    </button>
                </div>

                <div className="p-5 mt-24 px-8">
                    <ul className="flex flex-col justify-center text-xl space-y-10 uppercase">
                        <li className="">
                            <Link className="hover:text-gray-500 transition duration-300 ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500 transition duration-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500 transition duration-300">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500 transition duration-300">
                                Page
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500 transition duration-300">
                                blog
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500 transition duration-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Full-page Sidebar with Zoom Animation only large device show */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 w-full h-full ${isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
                    } z-50 hidden lg:block`}
                style={{ display: 'none' }}
            >
                <div className=" flex flex-col h-full">

                    <div className="flex">
                        <div className="w-2/12 py-16 ">
                            <div className={`border-b  px-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}>
                                <Link to="/" className="">
                                    <img
                                        src={isDarkMode ? logoWhite : logoBlack}
                                        alt="Logo"
                                        className="h-10 w-auto mb-10"
                                    />
                                </Link>
                            </div>

                            <div className={`p-5 mt-24 border-b  px-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}>
                                <h1 className="font-bold text-2xl">Follow Us</h1>
                                <ul className="flex flex-col space-y-2 mt-5">
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Dribbble
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Behance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            YouTube
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={`p-5 mt-24 border-b  px-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"} `}>
                                <ul className="flex flex-col space-y-2">
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            Career
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-gray-500 transition duration-300">
                                            blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5 mt-24">

                            </div>
                        </div>

                        <div className="w-7/12 mt-20 py-16">
                            <div className={`flex flex-col  text-2xl  border-t border-s border-[#33333363] overflow-y-auto  uppercase ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}>
                                <Link
                                    to="/"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/pages"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    Pages
                                </Link>
                                <Link
                                    to="/services"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    Services
                                </Link>
                                <Link
                                    to="/team"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    Team
                                </Link>
                                <Link
                                    to="/blog"
                                    className={`hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl border-b  px-20 py-8 ${isDarkMode ? "border-[#33333363]" : "border-[#73737332]"}`}
                                    onClick={toggleSidebar}
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/contact"
                                    className="hover:text-gray-500 transition duration-300 text-4xl lg:text-5xl 2xl:text-6xl  px-20 py-5"
                                    onClick={toggleSidebar}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className={`w-3/12  py-16 ${isDarkMode ? "text-white bg-[#1D1D1D]" : "text-black border-s"}`}>
                            <div className="flex justify-end px-10">
                                <button onClick={toggleSidebar} className={` p-5 rounded-full ${isDarkMode ? "text-white bg-[#232323]" : "text-white bg-[#232323]"}`}>
                                    <RxCross2 className="text-[25px]" />
                                </button>
                            </div>
                            <div >
                                {/* searchbar need */}
                                <div className="px-10 mt-20">
                                    <div className="relative">
                                        <input
                                            type="text"

                                            placeholder="Search keyword"
                                            className={`w-full   placeholder-gray-400 py-3 px-6 pr-12 rounded-full border border-gray-700 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-all duration-300 ${isDarkMode ? "bg-[#232323] text-white" : "text-white"}`}
                                        />
                                        <button
                                            type="submit"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            <IoSearch className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                                <div className="px-10 flex flex-col space-y-5 mt-36">
                                    <h1 className="text-2xl font-semibold">Get in touch</h1>
                                    <p>+(02) - 094 980 547</p>
                                    <p>info@extradesign.com</p>
                                    <p>230 Norman Street New York, QC (USA) H8R 1A1</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;