import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';


const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('Login') || location.pathname.includes('register');
    
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;