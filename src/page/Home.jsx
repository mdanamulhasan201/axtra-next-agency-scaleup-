
// import { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import FeaturedWork from '../components/Home/FeaturedWork';
import Services from '../components/Home/Services';
import Testimonial from '../components/Home/Testimonial';
import WhoWeAre from '../components/Home/WhoWeAre';
import WhyChooseUs from '../components/Home/WhyChooseUs';
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
            <WhoWeAre />
            <Services />
            <FeaturedWork />
            <Testimonial />
            <WhyChooseUs/>
        </div>
    );
};

export default Home;