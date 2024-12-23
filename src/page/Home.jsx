
// import { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import WhoWeAre from '../components/Home/WhoWeAre';
import Brands from '../components/brands/Brands';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
const Home = () => {

    //   useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //       el: document.querySelector('#scroll-container'),
    //       smooth: true,
    //     });

    //     return () => {
    //       scroll.destroy();
    //     };
    //   }, []);
    return (
        <div >
            <Banner />
            <Brands />
            <WhoWeAre/>
        </div>
    );
};

export default Home;