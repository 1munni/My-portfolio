import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer';
import Navbar from '../Pages/Navbar';

const RootLayouts = () => {
    return (
        <div className="min-h-screen w-full bg-base-200 ">
           {/* Sticky Navbar */}
    <div className="sticky top-0 z-50 shadow-md text-base-content  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md mb-8">
        <div className="max-w-6xl mx-auto px-4">
     <Navbar></Navbar>
        </div>
      </div>

        {/* Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
           
           {/* Footer */}
      <footer  className="text-base-content  bg-white/80 dark:bg-gray-900/80  ">
        <Footer />
      </footer>
        </div>
    );
};

export default RootLayouts;