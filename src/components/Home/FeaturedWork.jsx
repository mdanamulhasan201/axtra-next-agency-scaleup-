import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import image1 from '../../assets/featuredWork/1.webp';
import image2 from '../../assets/featuredWork/2.webp';
import image3 from '../../assets/featuredWork/3.webp';
import image4 from '../../assets/featuredWork/4.webp';
import ScrollTrigger from 'gsap/ScrollTrigger';

const FeaturedWork = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRefs = useRef([]);
    const autoSlideInterval = useRef(null);
    const titleRefs = useRef([]);
    gsap.registerPlugin(ScrollTrigger);

    const data = [
        { id: 1, img: image1, title1: "benjon", title2: "website", title3: "2012" },
        { id: 2, img: image2, title1: "benjon", title2: "website", title3: "2012" },
        { id: 3, img: image3, title1: "benjon", title2: "website", title3: "2012" },
        { id: 4, img: image4, title1: "benjon", title2: "website", title3: "2012" },
    ];

    const animateSlide = (direction) => {
        const totalSlides = data.length;
        let nextSlide =
            direction === 'next'
                ? currentSlide === totalSlides ? 1 : currentSlide + 1
                : currentSlide === 1 ? totalSlides : currentSlide - 1;

        const currentSlideEl = slideRefs.current[currentSlide - 1];
        const nextSlideEl = slideRefs.current[nextSlide - 1];

        gsap.to(currentSlideEl, {
            xPercent: direction === 'next' ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut'
        });

        gsap.fromTo(
            nextSlideEl,
            { opacity: 0, xPercent: direction === 'next' ? 100 : -100 },
            { opacity: 1, xPercent: 0, duration: 1, ease: 'power2.inOut' }
        );

        setCurrentSlide(nextSlide);
    };

    useEffect(() => {
        // Set initial slide
        const firstSlide = slideRefs.current[0];
        const otherSlides = slideRefs.current.slice(1);

        gsap.set(firstSlide, { opacity: 1, xPercent: 0 });
        gsap.set(otherSlides, { opacity: 0, xPercent: 100 });
    }, []);

    useEffect(() => {
        // Auto-slide functionality
        autoSlideInterval.current = setInterval(() => {
            animateSlide('next');
        }, 5000);

        return () => {
            clearInterval(autoSlideInterval.current);
        };
    }, [currentSlide]);

    useEffect(() => {
        // Animate titles on scroll
        titleRefs.current.forEach((ref) => {
            if (ref) {
                gsap.fromTo(
                    ref,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ref,
                            start: "top 90%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <div className="bg-[#171717] text-white min-h-screen">
            <div className="max-w-screen-xl mx-auto px-5 relative">
                <div className="py-16">
                    <h1 className="uppercase font-semibold text-lg">
                        Featured<br />Work
                    </h1>

                    <div className="relative overflow-hidden group">
                        <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 z-10 px-4 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out">
                            <button
                                onClick={() => animateSlide('prev')}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/60 transition-colors"
                            >
                                <BsArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => animateSlide('next')}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/60 transition-colors"
                            >
                                <BsArrowRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="relative h-[80vh]">
                            {data.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    ref={(el) => (slideRefs.current[index] = el)}
                                    className="absolute inset-0 flex justify-end items-center"
                                >
                                    <div className="absolute hidden md:block  left-20 top-16 lg:left-56 lg:top-16 2xl:left-40 2xl:top-24 z-20">
                                        <div
                                            ref={(el) => (titleRefs.current[index * 3] = el)}
                                            className="uppercase text-9xl lg:text-[140px]  2xl:text-[160px] leading-none whitespace-pre-line"
                                        >
                                            {slide.title1}
                                        </div>
                                    </div>
                                    <div className="absolute hidden md:block left-40 top-60 lg:left-[450px] lg:top-52 2xl:left-96 2xl:top-[280px] z-20">
                                        <div
                                            ref={(el) => (titleRefs.current[index * 3 + 1] = el)}
                                            className="uppercase text-9xl lg:text-[130px] xl:text-[140px] 2xl:text-[160px] leading-none whitespace-pre-line"
                                        >
                                            {slide.title2}
                                        </div>
                                    </div>
                                    <div className="absolute hidden md:block left-20 top-[400px] lg:left-56 lg:top-[350px] 2xl:left-48 2xl:top-[470px] z-20">
                                        <div
                                            ref={(el) => (titleRefs.current[index * 3 + 2] = el)}
                                            className="uppercase text-9xl lg:text-[130px] xl:text-[140px] 2xl:text-[160px] leading-none whitespace-pre-line"
                                        >
                                            {slide.title3}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-8/12 lg:w-5/12">
                                        <div className="relative aspect-[3/4]">
                                            <img
                                                src={slide.img}
                                                alt={`Featured work ${slide.id}`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedWork;
