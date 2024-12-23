import { IoPlay } from "react-icons/io5";
import { PiStarFourFill, PiStarFourLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import bgImage from "../assets/imagebg.webp";

const Home = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        <div className={` relative ${isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
            }`}>
            <div className="max-w-screen-xl mx-auto py-20 md:pb-96 px-5">
                <div>
                    <div className="flex gap-10 items-center">
                        <h1 className="uppercase font-semibold text-2xl ">Digital</h1>
                        <div className={`w-24 h-[1px] ${isDarkMode ? "bg-white" : "bg-[#121212]"}`}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-8xl md:text-[160px] lg:text-[180px] 2xl:text-[280px] leading-none uppercase font-semibold">Mark</h1>
                        <div className="hidden lg:flex items-center space-x-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-2">
                                <IoPlay className="text-lg" />
                            </div>
                            <button className="text-blue-500 font-medium hover:underline">Watch Video</button>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:-mt-10">
                    {/* Heading - Shown first on mobile */}
                    <h1 className="order-1 sm:order-2 text-end sm:text-center md:text-start text-8xl z-1 w-full md:w-8/12 z-40 md:text-[160px] lg:text-[180px] 2xl:text-[280px] leading-none uppercase font-semibold">
                        Eting
                    </h1>

                    {/* Paragraph - Shown below heading on mobile */}
                    <p className="order-2 md:order-1 z-10 w-full md:w-4/12 lg:w-4/12 text-md">
                        Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment
                    </p>
                </div>
                <div className="block md:hidden mt-5">
                    <div className="">
                        <img src={bgImage} alt="" className="" />
                    </div>
                </div>

                {/* <div className="flex justify-between items-center gap-10">
                    <div className="">
                        <button>srcolling</button>
                    </div>
                   
                </div> */}
            </div>

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

export default Home;