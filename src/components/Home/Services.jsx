import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import SearchEngine from '../../assets/services/1.png';
import EmailMarketing from '../../assets/services/2.jpg';
import ContentMarketing from '../../assets/services/3.png';
import SocialMarketing from '../../assets/services/4.png';
import { RxArrowTopRight } from "react-icons/rx";
import gsap from 'gsap';


const Services = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredService, setHoveredService] = useState(null);
    const [isMouseInBounds, setIsMouseInBounds] = useState(false);
    const servicesContainerRef = useRef(null);



    const data = [
        {
            id: 1,
            title: "Search Engine Optimization",
            describe: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            img: SearchEngine,
            bulletPoints: [
                "Logo Design",
                "Advertisement",
                "Promotion"
            ]
        },
        {
            id: 2,
            title: "Email Marketing",
            describe: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            img: EmailMarketing,
            bulletPoints: [
                "Logo Design",
                "Advertisement",
                "Promotion"
            ]
        },
        {
            id: 3,
            title: "Content Marketing",
            describe: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            img: ContentMarketing,
            bulletPoints: [
                "Logo Design",
                "Advertisement",
                "Promotion"
            ]
        },
        {
            id: 4,
            title: "Social Marketing",
            describe: "We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
            img: SocialMarketing,
            bulletPoints: [
                "Logo Design",
                "Advertisement",
                "Promotion"
            ]
        }
    ];

    useEffect(() => {
        const container = servicesContainerRef.current;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const isInBounds =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            setIsMouseInBounds(isInBounds);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);



    const ServiceCard = ({ service, index }) => {
        const cardRef = useRef(null);
        const buttonRef = useRef(null);
        const [isHovered, setIsHovered] = useState(false);
        const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

        const handleButtonMouseEnter = () => {
            gsap.to(buttonRef.current, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out',
            });
        };

        const handleButtonMouseLeave = () => {
            gsap.to(buttonRef.current, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out',
            });
            setButtonPosition({ x: 0, y: 0 });
        };

        const handleButtonMouseMove = (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            setButtonPosition({ x, y });
        };
        return (
            <div
                ref={cardRef}
                className={`relative md:border-b md:last:border-b-0  py-20 px-5 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                onMouseEnter={() => {
                    setHoveredService(service.id);
                    setIsHovered(true);
                }}
                onMouseLeave={() => {
                    setIsHovered(false);
                    if (!isMouseInBounds) {
                        setHoveredService(null);
                    }
                }}
            >
                <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-16 relative z-20">
                    <div className="w-full md:w-1/3">
                        <h2 className={`text-3xl lg:text-5xl font-bold  transition-all duration-300 ${isDarkMode ? "text-white" : "text-black"
                            } group-hover:text-gray-500`}>
                            {service.title}
                        </h2>
                    </div>

                    <div className="w-full md:w-1/3">
                        <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}>
                            {service.describe}
                        </p>
                        <div className="space-y-3">
                            {service.bulletPoints.map((point, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"
                                        }`}>+</span>
                                    <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"
                                        }`}>{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                        <button
                            ref={buttonRef}
                            className="relative px-6 py-3 border-2 border-gray-500 text-gray-500 w-36 h-36 rounded-full bg-transparent overflow-hidden group/button"
                            style={{
                                transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={handleButtonMouseEnter}
                            onMouseMove={handleButtonMouseMove}
                            onMouseLeave={handleButtonMouseLeave}
                        >
                            <span
                                className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out transform scale-0 group-hover/button:scale-150 ${isDarkMode ? "bg-white text-red-300" : "bg-black text-white"}`}
                                style={{ zIndex: 1 }}
                            ></span>
                            <span className="relative z-10 flex items-center justify-center gap-2 capitalize  transition-colors duration-300 ease-in-out">
                                Details
                                <RxArrowTopRight className="text-xl" />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="md:block hidden ">
                    <div
                        className={`fixed pointer-events-none z-10 -mt-24 -ml-24 rounded-lg overflow-hidden transition-opacity duration-300 ${hoveredService === service.id && isMouseInBounds ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            left: `${mousePosition.x}px`,
                            top: `${mousePosition.y}px`,
                            transform: 'translate(-50%, -50%)',
                            visibility: hoveredService === service.id ? 'visible' : 'hidden'
                        }}
                    >
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`relative ${isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"}`}>
            <div className="max-w-screen-xl mx-auto px-5 relative ">
                <div className="hidden md:block">
                    <div className="">
                        <div className="absolute top-32 left-[300px] lg:left-[380px] xl:left-[350px] transform">
                            <div className={` px-5 py-5 ${isDarkMode ? "text-white bg-[#171717]" : "bg-white"}`}>
                                <h3 className={`text-lg uppercase font-semibold  mb-2 tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Services</h3>
                                <h1 className="font-semibold tracking-wide text-4xl xl:text-5xl uppercase w-[400px]">
                                    Our marketing
                                    Services
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center ">
                        {/* left side  */}
                        <div className="w-5/12">

                        </div>
                        <div className={`w-7/12 border-s  ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
                            <div className="pt-80 mb-24 px-5">
                                <p className={`pt-10 text-lg w-3/4 ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Consumers today rely heavily on digital means to
                                    research products. We research a brand of bldend
                                    engaging with it, according to the meanwhile, 51%
                                    of consumers say they use Google to research
                                    products before buying.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* show  mobile devices */}
                <div className="block md:hidden">
                    <div className="px-5 py-5">
                        <h3 className={`text-md uppercase font-semibold  mb-2 tracking-wide ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Services</h3>
                        <h1 className="font-semibold tracking-wide text-3xl  uppercase w-[300px]">
                            Our marketing
                            Services
                        </h1>
                        <p className={`pt-10 text-lg  ${isDarkMode ? "text-gray-300" : "text-gray-500"}`}>Consumers today rely heavily on digital means to
                            research products. We research a brand of bldend
                            engaging with it, according to the meanwhile, 51%
                            of consumers say they use Google to research
                            products before buying.</p>

                    </div>
                </div>
                {/* Services Grid */}
                <div
                    ref={servicesContainerRef}
                    className={`border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                >
                    {data.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Services;