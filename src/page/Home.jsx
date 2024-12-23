import { IoPlay } from "react-icons/io5";
import { PiStarFourFill, PiStarFourLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import bgImage from "../assets/imagebg.webp";

const Home = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        <div className={`h-screen relative ${isDarkMode ? "bg-[#171717] text-white" : "bg-white text-black"
            }`}>
            <div className="max-w-screen-xl mx-auto py-20 px-5">
                <div>
                    <div className="flex gap-10 items-center">
                        <h1 className="uppercase font-semibold text-2xl ">Digital</h1>
                        <div className={`w-24 h-[1px] ${isDarkMode ? "bg-white" : "bg-[#121212]"}`}></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-7xl md:text-[170px] lg:text-[200px] 2xl:text-[280px] leading-none uppercase font-semibold">Mark</h1>
                        <div className="hidden lg:flex items-center space-x-2">
                            <div className="flex items-center justify-center bg-blue-500 text-white rounded-full p-2">
                                <IoPlay className="text-lg" />
                            </div>
                            <button className="text-blue-500 font-medium hover:underline">Watch Video</button>
                        </div>

                    </div>
                </div>

                <div className="flex justify-between items-center gap-24 lg:-mt-10 z-1">
                    <p className="z-10 w-3/12 text-md">Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</p>
                    <h1 className="text-7xl  w-8/12 z-40 md:text-[170px] lg:text-[200px] 2xl:text-[280px] leading-none uppercase font-semibold">Eting</h1>
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

                <div className="hidden lg:flex">
                    <div className="absolute right-0  xl:bottom-16 z-0">
                        <img src={bgImage} alt="" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;