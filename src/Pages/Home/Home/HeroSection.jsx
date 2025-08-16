import React from 'react';
import { FaArrowDown, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HeroSection = () => {
    return (
     <section id='#heroSection'>
           <div className='container mx-auto p-4 bg-base-300 rounded-xl shadow-lg mb-8'>
            <div className='flex flex-col md:flex-row justify-between items-center py-12'>
                <div className='text-center md:text-left flex-1 px-6'>
                    <h2 className='text-xl md:text-2xl'>Hi, I'm</h2>
                    <h1 className='text-4xl md:text-6xl font-medium text-[#12526d]'>Munni Akter</h1>
                    <h3 className='text-lg md:text-xl font-semibold mt-2'>Frontend Developer & Content Writer</h3>
                    <p className='mt-4 text-gray-700 max-w-lg mx-auto md:mx-0'>
                        I craft modern web experiences and compelling digital content that engages and inspires.
                    </p>
                    <div className='flex justify-center md:justify-start items-center space-x-4 mt-6'>
                        <a href="https://github.com/1munni" aria-label="GitHub Profile"><FaGithubSquare size={36} className='text-gray-800 hover:text-[#12526d] transition-colors duration-300'/></a>
                        <a href="https://www.linkedin.com/in/zsmunni/" aria-label="LinkedIn Profile"><FaLinkedin size={36} className='text-gray-800 hover:text-[#12526d] transition-colors duration-300'/></a>
                        <a href="https://www.facebook.com/zs.munni" aria-label="Facebook Profile"><FaFacebookSquare size={36} className='text-gray-800 hover:text-[#12526d] transition-colors duration-300'/></a>
                    </div>
                  <a
  href=""
  className="mt-8 inline-flex items-center gap-2 bg-[#12526d] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-[#12526d] transition-colors duration-300"
>
  Resume <FaArrowDown />
</a>

                </div>
                {/* Profile Image Section */}

<div className="flex-1 mt-10 md:mt-0 px-4 flex justify-center items-center">
    {/* This outer div is the animated gradient background. */}
    <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full
                    bg-gradient-to-tr from-[#12526d] via-[#85B7C2] to-[#12526d] 
                    animate-pulse p-[4px] shadow-lg">
        {/* This inner div acts as the solid background for the image to sit on. */}
        <div className="w-full h-full rounded-full bg-white">
            <img 
                className="w-full h-full rounded-full object-cover p-1" 
                src="https://i.ibb.co/x8JVCgQQ/muslim-girl-in-hijab-free-vector-1.jpg" 
                alt="Munni Akter" 
            />
        </div>
    </div>
</div>
            </div>
        </div>
     </section>
    );
};

export default HeroSection;