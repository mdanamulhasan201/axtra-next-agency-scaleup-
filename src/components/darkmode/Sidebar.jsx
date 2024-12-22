import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { FaCog, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const sidebarRef = useRef(null);

    // Toggle Sidebar
    const toggleSidebar = () => {
        if (isSidebarOpen) {
            gsap.to(sidebarRef.current, {
                x: sidebarRef.current.offsetWidth,
                duration: 0.5,
                ease: 'power3.in',
                onComplete: () => setShowCloseButton(false),
            });
        } else {
            setShowCloseButton(true);
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.5,
                ease: 'power3.out',
            });
        }
        setIsSidebarOpen((prev) => !prev);
    };

    // Handle Dark Mode Toggle
    const toggleDarkMode = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-end z-50 ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`p-3 shadow-md  ${isDarkMode ? '  bg-white text-black' : 'bg-black text-white'}`}
            >
                <FaCog className="text-2xl animate-spinSlow" />
            </button>

            {/* Sidebar Content */}
            <div
                ref={sidebarRef}
                className={`fixed top-1/2 right-0 w-64 h-auto shadow-lg rounded-l-lg p-4 transform -translate-y-1/2 translate-x-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
            >
                {showCloseButton && (
                    <button
                        onClick={toggleSidebar}
                        className={`absolute top-1/2 left-[-45px] -translate-y-1/2 flex items-center justify-center p-3 shadow-md  ${isDarkMode ? ' bg-white text-black' : 'bg-black text-white'}`}
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                )}

                <div className="mt-8">
                    <h3 className="text-lg font-bold">Cursor</h3>
                    <select className={`w-full mt-2 p-2 rounded ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}>
                        <option value="animated">Animated</option>
                        <option value="default">Default</option>
                    </select>

                    <h3 className="mt-4 text-lg font-bold">Mode</h3>
                    <div className="flex mt-2 space-x-2">
                        <button
                            onClick={() => setIsDarkMode(false)}
                            className={`p-2 w-full text-sm font-semibold rounded ${!isDarkMode ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => setIsDarkMode(true)}
                            className={`p-2 w-full text-sm font-semibold rounded ${isDarkMode ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300'}`}
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
