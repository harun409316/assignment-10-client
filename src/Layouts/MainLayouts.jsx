import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <div  className='min-h-screen flex flex-col  bg-base-100'>
            <Navbar/>
            
        <div className="flex-grow">
        <Outlet />
      </div>
            <Footer/>
        </div>
    );
};

export default MainLayouts;