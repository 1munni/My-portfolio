import React from 'react';
import { FaArrowDown } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section id="about" className="container mx-auto px-4 py-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#12526d] mb-10 relative">
              Introduction About Me
                <span className="block w-48 h-1 bg-[#85B7C2] mx-auto mt-2 rounded-full"></span>
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-10">
                
                {/* Profile Image */}
                <div className="flex-1 flex justify-center">
                    <div className="p-[5px] rounded-full bg-gradient-to-tr from-[#12526d] via-[#85B7C2] to-[#12526d] shadow-lg">
                        <img
                            src="https://i.ibb.co/x8JVCgQQ/muslim-girl-in-hijab-free-vector-1.jpg"
                            alt="Munni Akter"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
  <p className="text-gray-700 leading-relaxed">
    Hello! I am <span className="font-bold text-[#12526d]">Munni Akter</span>, 
    a graduate with 5 years of experience in <strong>web content writing</strong>. 
    Over time, my passion for the web led me to master <strong>web design & development</strong>.  
    I specialize in building modern, responsive, and interactive web applications using 
    HTML, TailwindCSS, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and Stripe.
  </p>

  {/* Hobbies & Interests */}
  <div className="mt-6 bg-gray-50 p-5 rounded-lg shadow-md border border-gray-100">
    <h3 className="text-lg font-semibold text-[#12526d] mb-3">
      🌿 Beyond Coding
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li>🌱 Gardening enthusiast – I find creativity and patience while nurturing plants.</li>
      <li>💻 Exploring new trends & tools in the tech world.</li>
      <li>🔍 Basic on-page SEO knowledge to optimize content for the web.</li>
      <li>📝 Basic WordPress  and blogging experience.</li>
    </ul>
  </div>
</div>

            </div>
        </section>
    );
};

export default AboutMe;
