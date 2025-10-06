import React from 'react'

const About = () => {


    const experienceList = [
        {id: 1, title:"Title 1", description: 'At Viva CDMX, we believe that discovering Mexico City should be more than just sightseeing—it should be an experience that awakens all your senses. Our tours are designed to show you the city the way locals know and love it: through its vibrant flavors, breathtaking landscapes, and iconic cultural landmarks.'},
        {id: 2, title:"Title 2", description: 'From savoring authentic street tacos in bustling markets to admiring the colonial architecture of the Historic Center, every stop on our journey is carefully chosen to highlight what makes Mexico City unforgettable. We take you beyond the ordinary routes, blending the city’s world-famous attractions with hidden gems that only locals know.'},
        {id: 3, title:"Title 3", description: 'Our guides are passionate storytellers who bring history to life, while also sharing insider tips on the best food, viewpoints, and cultural spots. Whether you’re gliding through the colorful canals of Xochimilco, walking the grand avenues of Reforma, or tasting traditional dishes in Coyoacán, we ensure every moment feels unique and personal.'},
        {id: 4, title:"Title 4", description: 'For us, it’s not just about showing you Mexico City—it’s about helping you feel it. The energy, the flavor, the beauty, and the warmth of its people. That’s the experience we promise.'},
    ]

    return (
        <div className="flex flex-col items-center h-full mx-2 my-24 " id="About">
            <div className="flex flex-col items-center py-12 w-full space-y-8">
                <h1 className="text-5xl font-light text-gray-700 text-center capitalize">About <span className="font-light text-gray-500 underline">us</span></h1>
                <p className="font-light text-gray-700/80 text-2xl text-center capitalize">Discover Mexico City in new ways</p>
                <div className="flex flex-col space-y-2 items-center">
                    <p className="font-light text-gray-700/80 capitalize text-center underline underline-offset-25">Here's what we can offer to you</p>
                </div>
            </div>

            {experienceList.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-sm md:text-xl lg:text-2xl text-justify max-w-5xl ">
                    <p className="text-gray-700/90 p-4">{item.description}</p>
                </div>
            ))}
        </div>

    )
}
export default About
