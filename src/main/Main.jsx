import { useEffect } from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Main = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#scroll-container'),
            smooth: true,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <>
            <Navbar />
            <div id="scroll-container">
                <Outlet />
            </div>
        </>
    );
};

export default Main;
