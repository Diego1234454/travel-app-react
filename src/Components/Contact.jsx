import React from 'react'
import {Facebook, Instagram, MessageCircle} from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import { motion } from "motion/react"


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7fb6d6fd-e371-48e2-ab09-87600a2e19c0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent! We will contact you soon.");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message);
            setResult(data.message);
        }
    };

    return (
        <div className="max-h-full flex flex-col items-center my-8 overflow-hidden" id="Contact">
            <div className="flex flex-col items-center py-12 w-fit space-y-8">
                <h1 className="text-5xl font-light text-gray-700 text-center capitalize">Contact <span className="font-light text-gray-500 underline">us</span></h1>
                <p className="font-light text-gray-700/80 text-2xl text-center capitalize">Here is our social media info</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-24 w-fit py-16 ">
                    <motion.div
                        initial={{opacity: 0, x:-100}}
                        transition={{duration: 1}}
                        whileInView={{opacity: 1, x:0}}
                        viewport={{once: true}}
                        className="flex flex-col space-y-8 w-full items-center justify-center ">
                        <div className="flex flex-col items-center gap-2 ">
                            <h2 className="font-light text-gray-700/80 text-2xl text-center capitalize">Our Social Media</h2>
                            <div className="flex gap-4">
                                <a href="#" title="Facebook"><Facebook className=" text-blue-700"/></a>
                                <a href="#" title="Instagram"><Instagram className="text-pink-600"/></a>
                                <a href="#" title="WhatsApp"><MessageCircle className="text-green-900"/></a>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 items-center justify-center w-full">
                            <div className="flex gap-2">
                                <p className="text-black font-semibold">Phone Number:</p>
                                <a href="tel:987654321" className="text-gray-90/95 font-light">+1 (987) 654-321</a>
                            </div>
                            <div className="flex gap-2">
                                <p className="text-black font-semibold">Email:</p>
                                <a href="mailto:vivacdmx@viva.com" className="text-gray-90/95 font-light">vivacdmx@viva.com</a>
                            </div>
                            <div className="flex flex-col gap-2 items-center justify-center w-xs">
                                <p className="text-black font-semibold">Location:</p>
                                <p className="text-gray-90/95 font-light text-center">P.za de la Constitución S/N, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX</p>
                            </div>
                        </div>
                    </motion.div>



                <motion.div
                    initial={{opacity: 0, x:150}}
                    transition={{duration: 1}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{once: true}}
                    className="flex flex-col items-center justify-center w-full space-y-4">
                    <h2 className="font-light text-gray-700/80 text-md md:text-2xl text-center capitalize">You can also send us an email here</h2>
                    <form onSubmit={onSubmit} className="w-xs md:w-md shadow-xl rounded-xl p-2 ">
                        <div className="flex flex-col w-full space-y-3">
                            <div>
                                <span className="text-black font-bold">Your name:</span>
                                <input type="text" name="name" placeholder="Input your name" className="bg-white border border-black rounded w-full h-[30px] p-1" required />
                            </div>
                            <div>
                                <span className="text-black font-bold">Your Email:</span>
                                <input type="email" name="email" placeholder="Input your email" className="bg-white border border-black rounded w-full h-[30px] p-1" required/>
                            </div>
                            <div className="flex flex-col w-full space-y-3">
                                <span className="text-black font-bold">Your Message:</span>
                                <textarea name="Message" placeholder="Input your message here..." className="bg-white border border-black rounded w-full h-[100px] resize-none p-1" required/>

                                <button className="bg-blue-600 text-white py-2 px-4 my-2 rounded hover:cursor-pointer">
                                    {result ? result : "Send Message"}</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
            <motion.iframe
                initial={{opacity: 0, y:150}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6900.358845266198!2d-99.14362546764998!3d19.43626730280566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f932c627afe1%3A0x914f3df027515f27!2sCatedral%20Metropolitana%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1759565555553!5m2!1ses-419!2smx"
                width="400" height="300" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className="fa-border shadow-2xl max-w-xs md:max-w-md"></motion.iframe>
        </div>
    )
}
export default Contact
