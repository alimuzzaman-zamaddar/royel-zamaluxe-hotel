import React from 'react';
import { Outlet} from 'react-router-dom';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';


const Main = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;