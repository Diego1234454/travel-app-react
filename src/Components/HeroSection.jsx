import React from 'react'
import { motion } from "motion/react"
import Header from "./Header.jsx";

export const HeroSection = () => {
    return (
        <div className="flex flex-col bg-[url(/Images/bg-hero.jpg)] bg-cover h-screen overflow-hidden relative m-2 rounded-xl" id="Hero">

            <Header/>

            <motion.div
                initial={{opacity: 0, y:-50}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                className="flex flex-col space-y-8 justify-center items-center h-full">
                <h1 className="text-white text-md md:text-4xl lg:text-6xl font-light text-center w-fit">Discover <span className="bg-gradient-to-r from-green-500 via-white to-red-500 inline-block text-transparent bg-clip-text text-shadow-xs ">Mexico City's</span> Culture As Well As The Best Tourist Destinations With Us</h1>
                <a href="#Services" className="rounded-full bg-gradient-to-r from-blue-500/95 to-purple-500/95 text-white py-2 px-8 hover:cursor-pointer hover:scale-110 ease=in-out transition-transform duration-300">Learn More</a>
            </motion.div>
            <div className="text-white flex absolute text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
                <div className="flex flex-col w-fit  bg-white p-4 rounded-md shadow-xl">
                    <h2 className="text-black text-xl md:text-2xl font-semibold ">10+</h2>
                    <p className="text-gray-700 text-[12px] md:text-sm ">Years of Experience</p>
                </div>
                <div className="flex flex-col w-fit bg-white p-4 rounded-md">
                    <h2 className="text-black text-xl md:text-2xl font-semibold ">5.0</h2>
                    <p className="text-gray-700 text-[12px] md:text-sm  ">Average Rating</p>
                </div>
            </div>
        </div>
    )
}
