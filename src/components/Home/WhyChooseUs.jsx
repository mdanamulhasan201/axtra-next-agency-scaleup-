import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";

import imgBg from "../../assets/whyChooseUs/counter-3.webp";

const HorizontalScroll = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.context(() => {
            const sections = gsap.utils.toArray('.panel');

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 4,
                    snap: {
                        snapTo: 1 / (sections.length - 1),
                        duration: 1,
                        ease: "power1.inOut",
                    },
                    end: () => "+=" + triggerRef.current.offsetWidth * 2,
                },
            });
        });

        return () => pin.revert();
    }, []);

    return (
        <div className="overflow-hidden">
            <div ref={triggerRef}>
                <div
                    ref={sectionRef}
                    className="flex flex-nowrap h-screen"
                >
                    <div className={`panel w-screen  h-screen flex items-center justify-center  flex-shrink-0 ${isDarkMode ? "text-white bg-[#171717]" : "text-black bg-[#FFFAF0]"}`}>

                        <h1 className="text-6xl md:text-9xl font-semibold uppercase text-center">Why <br /> Choose Us </h1>
                        {/* <h1 className="text-9xl font-semibold uppercase"> </h1> */}

                    </div>
                    <div
                        className={`panel w-screen h-screen flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-16 ${isDarkMode ? "text-white bg-[#121212]" : "bg-[#FFF5F7] text-black"
                            }`}
                    >
                        <div className="flex flex-col lg:flex-row h-full items-center justify-between py-8 sm:py-12 lg:py-16">
                            {/* Left Content */}
                            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-base sm:text-lg font-medium break-words whitespace-normal">
                                        WHY CHOOSE US
                                    </h2>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                    KEYWORD, RESEARCH<br />
                                    STRATEGY, SURVEY,<br />
                                    & ANALYTICS
                                </h1>

                                <p className="text-gray-600 text-sm sm:text-base max-w-full sm:max-w-lg">
                                    Attention, we take out our round glasses and our sweater with elbow
                                    patches to go back to the origins of the user experience: the first
                                    mention of the user and its importance was born in the
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <button className="px-4 sm:px-6 py-2 bg-white border border-gray-300 rounded-full text-xs sm:text-sm">
                                        GOOGLE
                                    </button>
                                    <button className="px-4 sm:px-6 py-2 bg-white border border-gray-300 rounded-full text-xs sm:text-sm">
                                        PINTEREST
                                    </button>
                                    <button className="px-4 sm:px-6 py-2 bg-white border border-gray-300 rounded-full text-xs sm:text-sm">
                                        INSTAGRAM
                                    </button>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="w-full lg:w-1/2 space-y-8 sm:space-y-12 mt-8 lg:mt-0">
                                {/* Strategy Circle */}
                                <div className="flex items-center gap-4 sm:gap-8">
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                                        <div className="w-full h-full rounded-full border-2 border-black flex items-center justify-center">
                                            <span className="text-2xl sm:text-4xl font-bold">60%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                                            STRATEGY
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Your marketing strategy optimizing performances doesn't have to be a
                                            guessing game.
                                        </p>
                                    </div>
                                </div>

                                {/* Audience Circle */}
                                <div className="flex items-center gap-4 sm:gap-8">
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                                        <div className="w-full h-full rounded-full border-2 border-black flex items-center justify-center">
                                            <span className="text-2xl sm:text-4xl font-bold">95%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                                            AUDIENCE
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Your marketing strategy optimizing performances doesn't have to be a
                                            guessing game.
                                        </p>
                                    </div>
                                </div>

                                {/* Keyword Circle */}
                                <div className="flex items-center gap-4 sm:gap-8">
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                                        <div className="w-full h-full rounded-full border-2 border-black flex items-center justify-center">
                                            <span className="text-2xl sm:text-4xl font-bold">70%</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                                            KEYWORD
                                        </h3>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Your marketing strategy optimizing performances doesn't have to be a
                                            guessing game.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* # */}
                    <div
                        className={`panel w-screen h-screen flex flex-shrink-0 px-5 lg:px-16 ${isDarkMode ? "text-white bg-[#171717]" : "bg-[#F3ECEC] text-black"
                            }`}
                    >
                        {/* Left Section */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h2 className="text-4xl font-bold">25k</h2>
                                    <p className="text-lg">Project completed</p>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold">8k</h2>
                                    <p className="text-lg">Happy customers</p>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold">15</h2>
                                    <p className="text-lg">Years experiences</p>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold">98</h2>
                                    <p className="text-lg">Awards achievement</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex-1 flex justify-center items-center relative">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${imgBg})`,

                                }}
                            ></div>
                        </div>
                    </div>
                    <div className={`panel w-screen  h-screen flex items-center justify-center  flex-shrink-0 ${isDarkMode ? "text-white bg-[#121212]" : "text-black bg-[#FFFAF0]"}`}>
                        <div>
                            <p className="text-2xl text-center font-semibold mb-5">Have you project in mind?

                            </p>
                            <h1 className="text-6xl  text-center">Let’s make something <br /> great together!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
