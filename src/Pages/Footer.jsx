import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
        setTimeout(() => {
            const element = document.getElementById(path.substring(2));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center p-8">
                {/* Logo / Name Section */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <button
                        onClick={() => scroll.scrollToTop({ smooth: true })}
                        className='text-2xl font-bold text-[#12526d] dark:text-[#f2f6f7] transition-colors duration-300 hover:text-[#1bb1dc] dark:hover:text-[#1bb1dc]'
                    >
                        Munni Akter
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-lg font-semibold text-[#12526d] dark:text-[#f2f6f7]">Quick Links</h3>
                    <button onClick={() => handleLinkClick('/#projects')} className="text-gray-600 dark:text-gray-300 hover:text-[#1bb1dc] transition-colors duration-300">Projects</button>
                    <button onClick={() => handleLinkClick('/#skills')} className="text-gray-600 dark:text-gray-300 hover:text-[#1bb1dc] transition-colors duration-300">skills</button>
                </nav>

                {/* Social Media and Copyright */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h3 className="text-lg font-semibold text-[#12526d] dark:text-[#f2f6f7]">Connect with Me</h3>
                    <div className='flex justify-center md:justify-start items-center space-x-4'>
                        <a href="https://github.com/1munni" aria-label="GitHub Profile">
                            <FaGithubSquare size={36} className='text-gray-800 dark:text-gray-200 hover:text-[#1bb1dc] transition-colors duration-300' />
                        </a>
                        <a href="https://www.linkedin.com/in/zsmunni/" aria-label="LinkedIn Profile">
                            <FaLinkedin size={36} className='text-gray-800 dark:text-gray-200 hover:text-[#1bb1dc] transition-colors duration-300' />
                        </a>
                        <a href="https://www.facebook.com/zs.munni" aria-label="Facebook Profile">
                            <FaFacebookSquare size={36} className='text-gray-800 dark:text-gray-200 hover:text-[#1bb1dc] transition-colors duration-300' />
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                        &copy; {new Date().getFullYear()} Munni Akter. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;