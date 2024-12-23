import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gsap } from "gsap";
import { FaCog, FaTimes } from "react-icons/fa";
import { toggleDarkMode } from "../../rtk/slices/darkModeSlice";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);

    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const dispatch = useDispatch();

    const sidebarRef = useRef(null);

    // Toggle Sidebar
    const toggleSidebar = () => {
        if (isSidebarOpen) {
            gsap.to(sidebarRef.current, {
                x: sidebarRef.current.offsetWidth,
                duration: 0.5,
                ease: "power3.in",
                onComplete: () => setShowCloseButton(false),
            });
        } else {
            setShowCloseButton(true);
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="z-50">
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`fixed top-1/2  right-0 transform -translate-y-1/2 p-3 shadow-md ${isDarkMode ? "bg-white text-black" : "bg-black text-white"
                    }`}
            >
                <FaCog className="text-2xl animate-spinSlow hover:text-[#777777] transition-colors duration-300" />
            </button>

            {/* Sidebar Content */}
            <div
                ref={sidebarRef}
                className={`fixed top-1/2 right-0 w-72 h-auto shadow-lg rounded-l-lg p-4 transform -translate-y-1/2 translate-x-full ${isDarkMode ? "bg-[#121212] text-white" : "bg-gray-100 text-black"
                    }`}
            >
                {showCloseButton && (
                    <button
                        onClick={toggleSidebar}
                        className={`absolute top-1/2 left-[-48px] -translate-y-1/2 flex items-center justify-center p-3 shadow-md ${isDarkMode ? "bg-white text-black" : "bg-black text-white"
                            }`}
                    >
                        <FaTimes className="text-2xl hover:text-[#777777] transform duration-300" />
                    </button>
                )}

                <div className="p-5">
                    <h3 className="text-lg font-bold">Cursor</h3>
                    <select
                        className={`w-full mt-2 p-2 rounded ${isDarkMode ? "bg-[#2b2b2f] text-white" : "bg-gray-200 text-black"
                            }`}
                    >
                        <option value="animated">Animated</option>
                        <option value="default">Default</option>
                    </select>

                    <h3 className="text-lg font-bold mt-10">Mode</h3>
                    <div className="flex mt-2 space-x-2">
                        <button
                            onClick={() => {
                                if (isDarkMode) {
                                    dispatch(toggleDarkMode());
                                    document.documentElement.classList.remove("dark");
                                }
                            }}
                            className={`p-2 w-full text-sm font-semibold rounded ${!isDarkMode
                                ? "bg-[#2b2b2f] text-white"
                                : "bg-[#2b2b2f] text-gray-400 hover:text-white transform duration-300"
                                }`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => {
                                if (!isDarkMode) {
                                    dispatch(toggleDarkMode());
                                    document.documentElement.classList.add("dark");
                                }
                            }}
                            className={`p-2 w-full text-sm font-semibold rounded ${isDarkMode
                                ? "bg-[#2b2b2f] text-white"
                                : "bg-[#2b2b2f] text-gray-400 hover:text-white transform duration-300"
                                }`}
                        >
                            Dark
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
