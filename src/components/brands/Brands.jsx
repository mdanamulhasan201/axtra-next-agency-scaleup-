import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import brand1 from "../../assets/brands/1.webp";
import brand2 from "../../assets/brands/2.webp";
import brand3 from "../../assets/brands/3.webp";
import brand4 from "../../assets/brands/4.webp";
import brand5 from "../../assets/brands/5.webp";
import brand6 from "../../assets/brands/6.webp";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const brandsRef = useRef([]);
    const headingRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Animate heading on scroll
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        // Animate brands on scroll
        gsap.fromTo(
            brandsRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

    return (
        <div
            ref={containerRef}
            className={`relative ${isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-5">
                <h1
                    ref={headingRef}
                    className="text-center uppercase opacity-0 font-semibold"
                >
                    We worked with global largest brands
                </h1>
                {/* Brands with GSAP Animation */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center items-center gap-10 flex-wrap py-10 mt-5">
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            ref={(el) => (brandsRef.current[index] = el)}
                            className="opacity-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Brands;
