import React from 'react'
import { motion } from "motion/react"

const Testimonials = () => {

    const testimonialsData = [
        {id: 1, name: 'Maria González', title: 'Sacramento, CA.', image: "/Images/MariaGonz.jpg", alt: "Maria González Testimonial", text: "This was the highlight of my trip to Mexico City! The food tour was unforgettable—I tasted street tacos, churros, and even dishes I had never heard of before. Our guide made the history behind each stop come alive. I felt like I was experiencing the city the way locals do." },
        {id: 2, name: 'James Parker', title: 'Cleveland, Ohio', image: "/Images/JamesPark.jpg", alt: "James Parker Testimonial", text: "The landscapes blew me away! From floating on the colorful trajineras in Xochimilco to exploring the vibrant streets of Coyoacán, every moment was picture-perfect. The guides were super friendly and even gave me recommendations for hidden cafes. I’d recommend this to anyone visiting the city for the first time." },
        {id: 3, name: 'Sofía Martínez', title: 'New York City, NY', image: "/Images/SofiaMart.jpg", alt: "Sofía Martínez Testimonial", text: "What I loved most was the balance between history and fun. We saw the big landmarks like the Historic Center, but also discovered local markets and parks I wouldn’t have found on my own. The mix of food, culture, and incredible views made this tour feel truly unique." },

    ]

    return (
        <motion.div
            initial={{opacity: 0, x:-100}}
            transition={{duration: 1}}
            whileInView={{opacity: 1, x:0}}
            viewport={{once: true}}
            className="flex flex-col max-h-full" id="Testimonials">
            <div className="flex flex-col items-center py-12 w-full space-y-8">
                <h1 className="text-5xl font-light text-gray-700 text-center capitalize">Customers <span className="font-light text-gray-500 underline">testimonials</span></h1>
                <p className="font-light text-gray-700/80 text-2xl text-center mb-6 capitalize">Results speak for themselves, but allow our recent customers to explain them to you!</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="max-w-[340px]  shadow-lg rounded px-8 py-12 text-center">
                        <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt}/>
                        <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
                        <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
                        <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}
export default Testimonials
