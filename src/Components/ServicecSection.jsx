import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDown, faCircleUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from "motion/react"



const ServicecSection = () => {

    const [indexLimit, setIndexLimit] = useState(3)

    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        if (showMore) {
            setIndexLimit(tourList.length);
        } else {
            setIndexLimit(3);
        }
    },[showMore]);


    const tourList = [
        {id: 1, href:"#", img: "/Images/coyoacan.jpg", tourName: "Coyoacan", title: "Coyoacan", description: "Enjoy Frida Kahlo Museum, exploring Coyoacan's spectacular streets" , price: "Price: $500 MXN" },
        {id: 2, href:"#", img: "/Images/xochimilco.jpg", tourName: "Xochimilco", title: "Xochimilco",  description: "Take a tour through Xochimilco, enjoy both Mexican food and live Mexican Music" , price: "Price: $400 MXN" },
        {id: 3, href:"#", img: "/Images/historic-center.jpg", tourName: "Centro", title: "Historic Center",  description: "Learn about the prehispanic, colonial and modern eras of the city" , price: "Price: $450 MXN" },
        {id: 4, href:"#", img: "/Images/ballon.jpg", tourName: "AirBalloon", title: "Teotihuacan Balloon Experience", description: "Hot Air Balloon from Mexico City to Teotihuacan with Buffet" , price: "Price: $800 MXN" },

    ]

    return (
        <div className="flex items-center overflow-hidden h-full m-2" id="Services">
            <motion.div
                initial={{opacity: 0, x:150}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x:0}}
                viewport={{once: true}}
                className="flex flex-col items-center py-12 w-full space-y-8">
                <h1 className="text-5xl font-light text-gray-700 text-center">Our <span className="font-light text-gray-500 underline">Services</span></h1>
                <p className="font-light text-gray-700/80 text-2xl text-center">We Offer One Of The Best Tour Services In Mexico City</p>
                <div className="flex flex-col space-y-2 items-center">
                    <p className="font-light text-gray-700/80 capitalize text-center">Take a look at these tours we have available for you</p>
                    <img src="/Images/arrow-down.svg" alt="" className="h-[26px] opacity-80"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-3 xl:grid-cols-3 gap-8 w-fit pt-6 justify-center" >
                    {tourList.slice(0, indexLimit).map((item, index) => (
                        <div key={index} className="flex flex-col hover:scale-110 transition-transform duration-300 ease-in-out m-2 w-full items-center ">
                            <a href={item.href} target="_blank"   style={{ backgroundImage: `url(${item.img})`, filter: 'opacity(90%)'}}
                               className="bg-cover bg-center w-[180px] h-[220px] md:w-[180px] md:h-[240px] lg:w-[300px] lg:h-[440px] xl:w-[440px] xl:h-[500px] backdrop-brightness-30 rounded-md relative"
                            >
                                <div className="absolute bottom-0 pb-8 md:pb-12 pl-2 space-y-2  capitalize">
                                    <p className="text-white text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-[0_8.2px_2.2px_rgba(0,0,0,0.9)]">{item.title}</p>
                                    <p className="text-white text-sm md:text-md lg:text-2xl font-bold drop-shadow-[0_4.2px_2.2px_rgba(0,0,0,0.8)]">{item.description}</p>
                                </div>

                            </a>
                            <div className="flex items-center justify-end w-full">
                                <p className="text-black/90 mr-2 font-semibold text-sm md:text-md lg:text-lg xl:text-xl">{item.price}</p>
                            </div>
                        </div>

                    ))}

                </div>

                <button className={`text-black ${tourList.length <=3 ? "hidden" : "block"} text-md md:text-lg lg:text-lg xl:text-xl font-light hover:cursor-pointer `} onClick={() => setShowMore(!showMore)}>
                    {indexLimit <= 3 ?  <div><FontAwesomeIcon icon={faCircleDown} style={{color: "#4b5058",}} />See More</div>: <div><FontAwesomeIcon icon={faCircleUp} style={{color: "#4b5058",}} />See Less</div>}
                </button>
            </motion.div>
        </div>
    )
}
export default ServicecSection
