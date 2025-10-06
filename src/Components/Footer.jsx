import React from 'react'
import {ArrowUp} from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex max-h-full bg-black rounded-t-md items-center justify-between py-4 px-8  ">
            <p className="text-gray-400 text-sm text-center md:text-md xl:text-xl">2025 &copy; Viva CDMX. All rights reserved</p>
            <a href="#" className="p-2 border border-white bg-white/80 rounded-full hover:scale-110 transition-transform duration-300"><ArrowUp className="text-black h-[14px] w-[14px] md:h-[24px] md:w-[24px] xl:h-[32px] xl:w-[32px]" /></a>
        </footer>
    )
}
export default Footer
