import React from 'react';

const ContactSection = () => {
    return (
       <section id="contact" className=" bg-[#12526D] scroll-smooth text-white
       py-4 mt-8 mb-10 dark:bg-gray-800 transition-colors duration-500 rounded-2xl">
            <div className="container mx-auto p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white dark:text-[#85B7C2] mb-8">
                    Contact Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email Card */}
                    <div className=" bg-white/7 p-6 rounded-xl shadow-lg border border-white/10 hover:bg-white/10 transition hover:shadow-2xl transform hover:-translate-y-1 flex flex-col items-center text-center dark:bg-gray-700
                                   text-white duration-300 hover:scale-105">
                        <svg className="h-16 w-16 text-[#85B7C2] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-2">
                            Email
                        </h3>
                        <a href="mailto:zsmunniakter@gmail.com" className="text-white dark:text-gray-300 hover:text-[#12526d] transition-colors duration-300">
                            mailto:zsmunniakter@gmail.com"
                        </a>
                    </div>
                    {/* Phone Card */}
              <div className="bg-white/7 p-6 rounded-xl shadow-lg border border-white/10 hover:bg-white/10 transition hover:shadow-2xl transform hover:-translate-y-1 flex flex-col items-center text-center text-white duration-300 hover:scale-105">
  <svg
    className="h-16 w-16 text-[#85B7C2] mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.147L9.25 10.485a4.5 4.5 0 006.293 6.293l1.157-1.498a1 1 0 011.147-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
  <a
    href="tel:+8801400005606"
    className="text-white hover:text-[#B5D9E2] transition-colors duration-300"
  >
    +880 01738460976
  </a>
</div>

{/* WhatsApp Card */}
<div className="bg-white/7 p-6 rounded-xl shadow-lg border border-white/10 hover:bg-white/10 transition hover:shadow-2xl transform hover:-translate-y-1 flex flex-col items-center text-center text-white duration-300 hover:scale-105">
  <svg
    className="h-16 w-16 text-[#85B7C2] mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    />
  </svg>
  <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
  <a
    href="https://wa.me/8801400005606"
    className="text-white hover:text-[#B5D9E2] transition-colors duration-300"
  >
   +880 01738460976
  </a>
</div>
                </div>
            </div>
        </section>
    );
  
};
export default ContactSection;