import React from 'react';
import { FaArrowDown, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import ContactSection from './Contact';
import Projects from './Project';

const Home = () => {
    return (
<div>
    <HeroSection></HeroSection>
    <AboutMe></AboutMe>
     <Projects></Projects>
    <Skills></Skills>
    <Education></Education>
    <ContactSection></ContactSection>
   
</div>
    );
};

export default Home;