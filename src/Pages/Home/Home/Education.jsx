import React from 'react';

const Education = () => {
    return (
        <section id="education" className="py-8 bg-base-300 dark:bg-gray-800 transition-colors duration-500 rounded-xl shadow-lg">
            <div className="container mx-auto p-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                    Education & Experience
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Card */}
                    <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg
                                    transition-all duration-300 transform
                                    hover:shadow-2xl hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#12526d] mb-4">
                            Education
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am a graduate with a Bachelor of Business Administration (BBA) in Accounting, from Govt. Tolaram College, Narayanganj. I completed my degree in 2016 with a CGPA of 3.48. My academic journey also includes completing my Higher Secondary Certificate (HSC) in 2012 from Rampal N.B.M College, Munshigonj.
                        </p>
                    </div>

                    {/* Experience Card */}
                    <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg
                                    transition-all duration-300 transform
                                    hover:shadow-2xl hover:scale-105">
                        <h3 className="text-2xl font-semibold text-[#12526d] mb-4">
                            Experience
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I am a professional content writer with over 5 years of experience in creating engaging and informative digital content. My skills include basic on-page SEO principles, utilizing WordPress for content management, and building successful blogs from the ground up.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;