import React from 'react';
import { FaArrowDown, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import ContactSection from './Contact';

const Home = () => {
    return (
<div>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Education></Education>
    <ContactSection></ContactSection>
</div>
    );
};

export default Home;