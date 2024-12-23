import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weAreImg from "../../assets/1.webp";
import { RxArrowTopRight } from 'react-icons/rx';

const WhoWeAre = () => {
    const imageRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const headingRef = useRef(null);
    const hiddenHeadingRef = useRef(null); 
    const hiddenSubHeadingRef = useRef(null); 
    const buttonRef = useRef(null); 

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Create parallax effect
        gsap.to(imageRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });

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

        gsap.fromTo(
            ".heading1", 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".heading1",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            ".paragraph", 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".paragraph",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );


        gsap.fromTo(
            hiddenHeadingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: hiddenHeadingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            hiddenSubHeadingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: hiddenSubHeadingRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
        setPosition({ x: 0, y: 0 }); 
    };

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x, y });
    };

    return (
        <div className="bg-[#171717] text-white">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="flex flex-col lg:flex-row justify-between items-center py-28 relative">
                    <div className="w-full lg:w-7/12 xl:w-8/12 xl:border-r overflow-hidden">
                        <div ref={imageRef} className="transform flex justify-center lg:justify-start">
                            <img
                                src={weAreImg}
                                alt="Who we are"
                                className=""
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 xl:w-4/12">
                        <div className="p-5 mt-5 md:mt-10 lg:mt-24 xl:mt-40 2xl:mt-60">
                            <div className="block xl:hidden" ref={headingRef}>
                                <h3 className="text-lg uppercase font-semibold">Who We Are</h3>
                                <h1 className="heading1 font-semibold text-xl sm:text-4xl uppercase xl:w-[500px] tracking-wide">
                                    We are a leading digital marketing agency
                                </h1>
                            </div>

                            <p className="paragraph text-[#999999] leading-7 mt-10 lg:mt-20 xl:mt-52 2xl:mt-40">
                                We're a team of strategic digital marketing working globally with the largest brands.
                                We believe that progress only happens when you refuse to play things safe.
                                We combine ideas and behaviors, and insights with design, technological data
                                to produce brand experiences that customers love our services.
                            </p>

                            <div className="mt-16">
                                <button
                                    ref={buttonRef}
                                    className="relative px-6 py-3 border-2 border-gray-500 text-gray-500 w-36 h-36 rounded-full bg-transparent overflow-hidden group"
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px)`,
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <span
                                        className="absolute inset-0 bg-white rounded-full transition-all duration-300 ease-in-out transform scale-0 group-hover:scale-150"
                                        style={{
                                            zIndex: -1,
                                        }}
                                    ></span>
                                    <span className="relative flex items-center capitalize group-hover:text-black transition-colors duration-300 ease-in-out">
                                        Explore us
                                        <RxArrowTopRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hidden content for large screens */}
                    <div className="hidden lg:block">
                        <div className="absolute top-48 left-[600px] xl:left-1/2 transform">
                            <div className="bg-[#171717] px-5 py-16">
                                <h3 ref={hiddenHeadingRef} className="text-lg uppercase font-semibold">Who We Are</h3>
                                <h1 ref={hiddenSubHeadingRef} className="font-semibold text-4xl xl:text-5xl uppercase xl:w-[500px]">
                                    We are leading digital marketing agency
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
