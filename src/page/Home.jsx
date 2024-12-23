import { useSelector } from "react-redux";


const Home = () => {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
    return (
        <div className={`h-screen ${isDarkMode ? "bg-[#121212] text-white" : "bg-white text-black"
            }`}>
            sdfsdf
        </div>
    );
};

export default Home;