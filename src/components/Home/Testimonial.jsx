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
    const containerRef = useRef(null);
    const imageRefs = useRef([]);
    const testimonialRef = useRef(null);
    const authorRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({ delay: 0.2 });

        imageRefs.current.forEach((img, index) => {
            if (img) {
                timeline.fromTo(
                    img,
                    { opacity: 0, scale: 0.4, y: 50 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power3.out",
                        delay: index * 0.1,
                    }
                );
            }
        });
    }, []);

    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            imageRefs.current.forEach((img, index) => {
                if (img) {
                    const offsetX = (x - rect.width / 6) / 80;
                    const offsetY = (y - rect.height / 6) / 80;

                    gsap.to(img, {
                        x: offsetX * (index + 1),
                        y: offsetY * (index + 1),
                        duration: 0.5,
                        ease: "power2.out",
                    });
                }
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);



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
            ref={containerRef}
            className={`relative overflow-x-hidden ${isDarkMode ? "bg-[#171717] text-white" : "text-black"}`}
            style={{
                backgroundImage: isDarkMode ? "none" : `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Floating Images */}
            <div className="hidden lg:block">
                <div
                    ref={(el) => (imageRefs.current[0] = el)}
                    className="absolute top-20 left-[200px] xl:top-20 xl:left-[200px] 2xl:top-20 2xl:left-[500px]"
                >
                    <img src={img1} alt="floating 1" />
                </div>
                <div
                    ref={(el) => (imageRefs.current[1] = el)}
                    className="absolute top-32 right-60 2xl:right-[500px]"
                >
                    <img src={img2} alt="floating 2" />
                </div>


                <div
                    ref={(el) => (imageRefs.current[2] = el)}
                    className="absolute top-72 left-5 2xl:top-96 2xl:left-10"
                >
                    <img src={img3} alt="floating 3" />
                </div>


                <div
                    ref={(el) => (imageRefs.current[3] = el)}
                    className="absolute top-[500px] left-20 2xl:top-[570px] 2xl:left-32"
                >
                    <img src={img4} className="h-80 xl:h-64 2xl:h-full" alt="floating 4" />
                </div>
                <div
                    ref={(el) => (imageRefs.current[4] = el)}
                    className="absolute top-[350px] right-20 2xl:top-[570px] 2xl:right-20"
                >
                    <img src={img5} alt="floating 5" />
                </div>
                <div
                    ref={(el) => (imageRefs.current[5] = el)}
                    className="absolute top-[550px] right-72 2xl:top-[770px] 2xl:right-60"
                >
                    <img src={img6} alt="floating 6" />
                </div>
            </div>

            <div className="lg:py-36">
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
                        <p className="text-xl 2xl:text-[25px] italic">{testimonials[currentIndex].quote}</p>
                    </div>

                    {/* Author Section */}
                    <div ref={authorRef} className="mt-6">
                        <p className="font-semibold text-xl 2xl:text-2xl">{testimonials[currentIndex].author}</p>
                        <p className="text-sm text-gray-400 mt-1">{testimonials[currentIndex].role}</p>
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
