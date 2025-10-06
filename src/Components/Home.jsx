import React from 'react'
import {HeroSection} from "./HeroSection.jsx";
import ServicecSection from "./ServicecSection.jsx";
import Testimonials from "./Testimonials.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";


const Home = () => {
    return (
        <>
            {/*Seccion Hero*/}
            <HeroSection/>
            {/*Servicios*/}
            <ServicecSection/>
            {/*Testimonials*/}
            <Testimonials/>
            {/*About*/}
            <About/>
            {/*Contact*/}
            <Contact/>
            {/*Footer*/}
            <Footer/>
        </>
    )
}
export default Home
