
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer */}
        </>
    );
};

export default Main;
