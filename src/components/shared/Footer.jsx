import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../../assets/site-logo-white.webp'

const Footer = () => {
    const lettersRef = useRef([]);
    const colors = [
        '#FFD700',
        '#FFA500',
        '#FF7F50',
        '#FF6B4A',
        '#FF4969',
        '#FF1493',
        '#FF69B4',
        '#FF1493',
        '#DA70D6',
        '#E066FF'
    ];

    useEffect(() => {
        const letters = lettersRef.current;

        letters.forEach((letter, index) => {
            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 1
            });

            tl.to(letter, {
                y: -100,
                duration: 0.5,
                ease: "power2.out"
            })
                .to(letter, {
                    y: 0,
                    duration: 0.5,
                    ease: "bounce.out"
                })
                .to(letter, {
                    color: colors[index % colors.length],
                    duration: 0.6,
                    ease: "none"
                }, "-=0.6");
            tl.delay(index * 0.1);
        });

        return () => {
            // Cleanup animations
            letters.forEach(letter => {
                gsap.killTweensOf(letter);
            });
        };
    }, []);

    return (
        <div className=" bg-[#171717] text-white px-5 lg:px-10">


            <div className='flex flex-col md:flex-row md:py-0 py-10 justify-between items-center border-b border-gray-700  '>
                {/* Left Section */}
                <div className="">
                    <div className="mb-6">
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
                        When do they work well, and when do they
                        on us and finally, when do we actually need
                        how can we avoid them.
                    </p>
                </div>

                {/* Center Social Links */}
                <div className="text-center mt-20 md:mt-0">
                    {['FACEBOOK', 'TWITTER', 'LINKEDIN', 'INSTAGRAM'].map((social) => (
                        <div
                            key={social}
                            className="py-10 border border-zinc-800 hover:bg-white hover:text-black transform duration-300 transition-opacity cursor-pointer w-80 md:w-48 "
                        >
                            {social}
                        </div>
                    ))}
                </div>

                {/* Right Section - Let's Talk */}
                <div className="">
                    <h1 className="text-6xl lg:text-9xl font-bold whitespace-nowrap md:mt-0 mt-28">
                        {"LET'S TALK".split('').map((letter, index) => (
                            <span
                                key={index}
                                ref={el => lettersRef.current[index] = el}
                                className="inline-block"
                                style={{ color: colors[index % colors.length] }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>

            {/* Bottom Section */}

            <div className="py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center">


                    {/* Copyright text - show second on mobile */}
                    <div className="text-md order-2 lg:order-none mt-10 md:mt-0">
                        © 2022 - {new Date().getFullYear()} | All rights reserved
                        <br className="lg:hidden" />
                        {/* by Wealcoder */}
                    </div>


                    {/* Navigation menu - show first on mobile */}
                    <nav className="flex flex-wrap gap-8   order-1 lg:order-none">
                        {['ABOUT US', 'CONTACT', 'CAREER', 'FAQS'].map((item, index) => (
                            <div key={item} className="relative group">
                                <span className="text-md cursor-pointer hover:text-gray-300 transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>


        </div>
    );
};

export default Footer;