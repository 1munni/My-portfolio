import React from 'react';
import { FaArrowDown, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';

const Home = () => {
    return (
<div>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <Skills></Skills>
</div>
    );
};

export default Home;