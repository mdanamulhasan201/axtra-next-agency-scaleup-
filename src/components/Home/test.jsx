import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import bgImg from "../../assets/testimonial/bg.png";

import img1 from "../../assets/testimonial/1.webp";
import img2 from "../../assets/testimonial/2.webp";
import img3 from "../../assets/testimonial/3.webp";
import img4 from "../../assets/testimonial/4.webp";
import img5 from "../../assets/testimonial/5.webp";
import img6 from "../../assets/testimonial/6.webp";


const testimonials = [
    {
        quote:
            "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!!",
        author: "MARIA D. HALK",
        role: "MANAGING DIRECTOR",
    },
    {
        quote:
            "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
        author: "JOHN DOE",
        role: "CEO, TECH SOLUTIONS",
    },
    {
        quote:
            "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
        author: "JANE SMITH",
        role: "HEAD OF OPERATIONS",
    },
];

const Testimonial = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");

    // Refs for animation targets
    const testimonialRef = useRef(null);
    const authorRef = useRef(null);

    // Animation handler
    useEffect(() => {
        const timeline = gsap.timeline();
        const offset = direction === "left" ? 100 : -100;
        timeline
            .fromTo(
                testimonialRef.current,
                { opacity: 0, x: offset },
                { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
            )
            .fromTo(
                authorRef.current,
                { opacity: 0, x: offset },
                { opacity: 1, x: 0, duration: 1, ease: "power1.out" },
                "<"
            );
    }, [currentIndex, direction]);

    // Auto-switch testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection("left");
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Handle button clicks
    const handlePrev = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div
            className={`relative ${isDarkMode ? "bg-[#171717] text-white" : "text-black"
                }`}
            style={{
                backgroundImage: isDarkMode ? "none" : `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            <div>
                <div className="absolute top-20 left-96">
                    <img src={img1} alt="" />
                </div>
                <div className="absolute top-20 right-96">
                    <img src={img2} alt="" />
                </div>
            </div>

            <div className="py-24">
                {/* Testimonial Section */}
                <div className="flex flex-col items-center justify-center p-6 text-center w-full lg:w-2/3 mx-auto h-screen">
                    {/* Quotation Marks */}
                    <div className="text-9xl font-bold ">
                        <span
                            className={`inline-block text-black dark:text-white`}
                            style={{ fontFamily: "Georgia, serif", lineHeight: 1 }}
                        >
                            &ldquo;
                        </span>
                    </div>


                    {/* Testimonial Content */}
                    <div ref={testimonialRef} className="max-w-2xl">
                        <p className="text-[25px] italic">{testimonials[currentIndex].quote}</p>
                    </div>

                    {/* Author Section */}
                    <div ref={authorRef} className="mt-6">
                        <p className="font-semibold text-2xl">
                            {testimonials[currentIndex].author}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                            {testimonials[currentIndex].role}
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-16">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
