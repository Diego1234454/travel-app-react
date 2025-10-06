import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router";

const navMenu = [
    {href: '#Services', title: 'Services'},
    {href: '#Testimonials', title: 'Testimonials'},
    {href: '#About', title: 'About'},
    {href: '#Contact', title: 'Contact'},

]

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [menuOpen])

    return (
        <div className="flex flex-row-3 items-center justify-between w-full py-8 px-4">
            <a href="#" className="text-2xl text-white text-bold tracking-tight my-2">Viva CDMX</a>
            {/*DESKTOP NAV*/}
            <div className="backdrop-blur-2xl bg-black/5 hidden md:flex space-x-12 rounded-full px-8 py-4 shadow-2xl">
                {navMenu.map((item, index) => (
                    <ul  className="text-white/80">
                        <a key={index} href={item.href} className="hover:text-white hover:underline hover:underline-offset-2 transition-colors duration-300">{item.title}</a>
                    </ul>
                ))}
            </div>
            <Link to="/Login"><button className="bg-white py-4 px-8 hidden md:flex rounded-full text-black hover:scale-110 transition-transform duration-300 ease=in-out hover:cursor-pointer">Login</button></Link>
            {/*MOBILE NAV*/}
            <div className="md:hidden flex items-center justify-end relative">
                <button className={`text-[24px] ${menuOpen ? "text-black z-51 absolute right-0 top-0" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FontAwesomeIcon icon={faCircleXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                <div className={` ${menuOpen ? "block" : "hidden"} flex flex-col items-center justify-center text-center z-50 right-0 top-0 bottom-0 overflow-hidden bg-white transition-all fixed w-full p-2 space-y-8`}>
                    {navMenu.map((item, index) => (
                        <ul  className="text-black items-center justify-between w-full px-8 py-4 shadow-2xl">
                            <a key={index} href={item.href} className="transition-colors duration-300" onClick={() => setMenuOpen(!menuOpen)}>{item.title}</a>
                        </ul>
                    ))}
                    <Link to="/Login">
                        <button className="bg-blue-400/90 py-4 px-8 flex md:hidden rounded-full text-black font-semibold hover:scale-110 transition-transform duration-300 ease=in-out hover:cursor-pointer">Login</button>
                    </Link>

                </div>
            </div>
        </div>


    )
}
export default Header
