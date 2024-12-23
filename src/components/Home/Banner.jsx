import { IoPlay } from "react-icons/io5";
import { PiStarFourFill, PiStarFourLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import bgImage from "../../assets/imagebg.webp";
// import { BiChevronDown } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const Banner = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const buttonRef = useRef(null);
    const textRef = useRef(null);
    const textRef2 = useRef(null);
    const linesRef = useRef([]);
    useEffect(() => {
        // Animate the button using GSAP
        gsap.to(buttonRef.current, {
            y: -10,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }, []);

    useEffect(() => {
        // Animate each letter individually
        const letters = textRef.current.querySelectorAll(".letter");
        gsap.fromTo(
            letters,
            { opacity: 0, x: 200 },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power2.out",
                stagger: 0.4,
            }
        );
    }, []);
    useEffect(() => {
        // Animate each letter individually
        const letters = textRef2.current.querySelectorAll(".letter");
        gsap.fromTo(
            letters,
            { opacity: 0, x: 200 },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
            }
        );
    }, []);



    useEffect(() => {
        gsap.fromTo(
            linesRef.current,
            { x: "100%", opacity: 0 },
            {
                x: "0%",
                opacity: 1,
                duration: 2,
                stagger: 0.5,
                ease: "power2.out",
            }
        );
    }, []);
    return (
        <div className={` relative ${isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
            }`}>
            <div className="max-w-screen-xl mx-auto py-20 md:pb-96 ">
                <div className="px-5">
                    <div className="flex gap-10 items-center">
                        <h1 className="uppercase font-semibold text-2xl ">Digital</h1>
                        <div className={`w-24 h-[1px] ${isDarkMode ? "bg-white" : "bg-[#121212]"}`}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1
                            ref={textRef}
                            className={`text-8xl md:text-[160px] lg:text-[180px] 2xl:text-[280px] leading-none uppercase font-semibold ${isDarkMode ? "text-white" : "text-black"}`}
                        >

                            {Array.from("Mark").map((char, index) => (
                                <span key={index} className="letter inline-block">
                                    {char}
                                </span>
                            ))}
                        </h1>
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-4">
                                {/* Video Thumbnail with Play Button */}
                                <div className="relative w-20 h-20">
                                    <img
                                        src="your-video-thumbnail.jpg"
                                        alt="Video Intro"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                                        <div className="flex items-center justify-center bg-white text-black rounded-full p-2">
                                            <IoPlay className="text-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* Watch Video Text */}
                                <div>
                                    <h1 className={`uppercase font-medium  ${isDarkMode ? "text-white" : "text-black"}`}> WATCH <br /> VIDEO INTRO</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:-mt-10 px-5">
                    {/* Heading - Shown first on mobile */}
                    <h1
                        ref={textRef2}
                        className={`order-1 sm:order-2 text-end sm:text-center md:text-start text-8xl z-1 w-full md:w-8/12 z-40 md:text-[160px] lg:text-[180px] 2xl:text-[280px] leading-none uppercase font-semibold ${isDarkMode ? "text-white" : "text-black"}`}
                    >

                        {Array.from("Eting").map((char, index) => (
                            <span key={index} className="letter inline-block">
                                {char}
                            </span>
                        ))}
                    </h1>

                    {/* Paragraph - Shown below heading on mobile */}
                    <div className="order-2 md:order-1 z-10 w-full md:w-4/12 lg:w-4/12 text-md overflow-hidden">
                        <div className="line" ref={(el) => (linesRef.current[0] = el)}>
                            Static and dynamic secure code review can prevent
                        </div>
                        <div className="line" ref={(el) => (linesRef.current[1] = el)}>
                            a day before your product is even released.
                        </div>
                        <div className="line" ref={(el) => (linesRef.current[2] = el)}>
                            We can integrate with your dev environment.
                        </div>
                    </div>

                </div>
                <div className="block md:hidden mt-5">
                    {/* Mobile Background Image */}
                    <div className="">
                        <img
                            src={bgImage}
                            alt="Background"
                            className="w-full  h-auto "
                        />
                    </div>
                </div>

            </div>
            {/* <div className="">
                    <button
                        ref={buttonRef}
                        className="flex flex-col justify-center items-center w-12 h-20 border-2 border-gray-400 rounded-full relative"
                    >
                        <span className="w-[2px] h-4 bg-gray-600 mb-1"></span>
                        <BiChevronDown className="text-gray-600 text-2xl" />
                    </button>
                </div> */}
            <div>

                <div className="absolute top-10 px-14 right-0 flex justify-center items-center">
                    <PiStarFourLight className=" text-5xl" />
                </div>
                <div className="absolute top-[78px] px-12 right-0 flex justify-center items-center">
                    <PiStarFourFill className=" text-xl" />
                </div>

                <div className="hidden md:block">
                    <div className="absolute right-0 bottom-0  lg:bottom-[180px] xl:bottom-[150px] 2xl:bottom-32 z-0 w-full md:w-[850px]  lg:w-[900px] xl:w-[1000px] 2xl:w-[1220px]">
                        <img src={bgImage} alt="" className="" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;