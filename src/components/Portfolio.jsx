import React from 'react'
import FiestaLaBlanc from '../assets/portfolio/FiestaLaBlanc.png';
// import GridNotes from '../assets/portfolio/GridNotes.png';
// import MyNotes from '../assets/portfolio/MyNotes.png';
// import ItunesClone from '../assets/portfolio/ItunesClone.png';
import TheChayaChitra from '../assets/portfolio/TheChayaChitra.png';
import reactEssentials from '../assets/portfolio/React-Essentials.png';
import premier from '../assets/portfolio/premier.png';
import trendline from '../assets/portfolio/trendline.png'
// import travelList from '../assets/portfolio/Travel-list.png';
import fashion from '../assets/portfolio/fashion-profile.png';

const Portfolio = () => {

    return (
        <div name="portfolio" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screens'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-normal w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl bold inline border-b-4 border-yellow-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     inline-block text-transparent bg-clip-text'><strong>Portfolio</strong></p>
                    <p className='py-6'>Checkout some of my work right here</p>
                </div>



                {/* This part is the structure for the card */}
                <div className='grid sm:grid-cols-3 md:grid-cols-2 gap-12 px-12 sm:px-8'>


                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl  duration-200 hover:scale-110'>
                        <img src={FiestaLaBlanc} alt="" className='rounded-xl duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center '>
                            <a href="https://restaurant-react-app-rust.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/restaurant-react-app" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>

                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span> </p>
                        <p ></p>
                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>"Fiesta La Blanc" discover my immersive restaurant website, crafted with React.js to offer a seamless and stylish browsing experience. Explore exquisite menu, and dive into the vibrant ambiance through stunning visuals and dynamic layouts. Savor the journey from your screen to our table.</p>
                    </div>

                    


                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl duration-200 hover:scale-110'>
                        <img src={reactEssentials} alt="" className='rounded-xl  duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://react-essentials-rosy.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/react-essentials" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span></p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Project built for clearing basics for react.js and its fundamentals. Having several code snippets based on different methods.It is a website designed solely for freshers in React.js library which would help them in clearing their basics and also help them understand the topics in a much more intuitive manner.</p>

                    </div>


                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl  duration-200 hover:scale-110'>
                        <img src={fashion} alt="" className='rounded-xl  duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://dribble-fashion-week.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/profile-page/tree/main" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack :<span className=' text-xs mt-2 text-red-300 ml-1 '>HTML, CSS, GRID-Layout</span> </p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '> This project is a replication of a design I found on Dribbble using HTML and CSS with a focus on CSS Grid Layout. The purpose of this project is to practice and showcase my front-end development skills, particularly in creating responsive and visually appealing layouts.</p>

                    </div>

            
                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl duration-200 hover:scale-110'>
                        <img src={premier} alt="" className='rounded-xl  duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://premier-website-beta.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/Premier-website" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> HTML, CSS, GRID-Layout</span> </p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 text-wrap '>This project is a replication of a design I found on Pintrest & Behance using HTML and CSS with a focus on CSS Flexbox Layout. The purpose of this project is to practice and showcase my front-end development skills, particularly in creating responsive and visually appealing layouts.</p>
                    </div>


                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl duration-200 hover:scale-110'>
                        <img src={trendline} alt="" className='rounded-xl  duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://trendline-dribble.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/Trendline-dribble" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack :<span className=' text-xs mt-2 text-red-300 ml-1 '>HTML, CSS, Flexbox</span></p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>This project is a replication of a design I found on Dribbble using HTML and CSS with a focus on CSS Flexbox Layout. The purpose of this project is to practice and showcase my front-end development skills, particularly in creating responsive and visually appealing layouts.
                        </p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-l-xl rounded-r-xl   duration-200 hover:scale-110'>
                        <img src={TheChayaChitra} alt="" className='rounded-xl duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://the-chaya-chitra.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Demo</strong></a>
                            <a href="https://github.com/Vargos98/The-Chaya-Chitra" className='w-1 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-gray-400'><strong>Code</strong></a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack :<span className=' text-xs mt-2 text-red-300 ml-1 '>HTML, CSS, JQuery</span></p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Designed with HTML, CSS, and jQuery, The site showcases their portfolio of breathtaking visuals and creative projects. Exploring services, view their stunning gallery, and connect with them to capture your memorable moments with professional excellence.</p>
                    </div>

                    


                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>




                </div>
            </div>

        </div>
    )
}

export default Portfolio;