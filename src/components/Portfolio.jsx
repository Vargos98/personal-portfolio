import React from 'react'
import FiestaLaBlanc from '../assets/portfolio/FiestaLaBlanc.png';
// import GridNotes from '../assets/portfolio/GridNotes.png';
import MyNotes from '../assets/portfolio/MyNotes.png';
// import ItunesClone from '../assets/portfolio/ItunesClone.png';
import TheChayaChitra from '../assets/portfolio/TheChayaChitra.png';
import reactEssentials from '../assets/portfolio/React-Essentials.png';
import travelList from '../assets/portfolio/Travel-list.png';
import fashion from '../assets/portfolio/fashion-profile.png';

const Portfolio = () => {

    return (
        <div name="portfolio" className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screens'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-normal w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl bold inline border-b-4 border-yellow-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        inline-block text-transparent bg-clip-text'>Portfolio</p>
                    <p className='py-6'>Checkout some of my work right here</p>
                </div>



                {/* This part is the structure for the card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>


                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={FiestaLaBlanc} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center '>
                            <a href="https://restaurant-react-app-rust.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/restaurant-react-app" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>

                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span> </p>
                        <p ></p>
                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Fiesta La Blanc is a React.js project based upon a restaurant website. Also, having emersive layout making it usercentric.</p>
                    </div>

                    


                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={reactEssentials} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://react-essentials-rosy.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/react-essentials" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span></p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Project built for clearing basics for react.js and its fundamentals. Having several code snippets based on different methods.</p>

                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={fashion} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://dribble-fashion-week.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/profile-page/tree/main" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack :<span className=' text-xs mt-2 text-red-300 ml-1 '>HTML, CSS, CSS-GRID</span> </p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '> This project is a replication of a design I found on Dribbble using HTML and CSS with a focus on CSS Grid Layout. The purpose of this project is to practice and showcase my front-end development skills, particularly in creating responsive and visually appealing layouts.</p>

                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={TheChayaChitra} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://the-chaya-chitra.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/The-Chaya-Chitra" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack :<span className=' text-xs mt-2 text-red-300 ml-1 '>HTML, CSS, JQuery</span></p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Website designed to showcase services provided by the company based on multi-level photography and videography.</p>
                    </div>

                    {/* <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={GridNotes} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://grid-notes.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/grid-notes" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span> </p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 text-wrap '>Designed & developed a user-friendly & mobile-friendly note-taking application using React, implemented a responsive grid layout for organizing and visualizing notes.</p>
                    </div> */}

                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={MyNotes} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://mynotes98.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/mynotes98" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span> </p>

                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 text-wrap '>Another Note making app designed to store data locally on device. So, the user could close/reload the page and does not loose its feeds.</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg duration-200 hover:scale-110'>
                        <img src={travelList} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center '>
                            <a href="https://react-basics-sooty.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/react-basics/tree/main/travel-list" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>

                        </div>
                        <p className='text-md bold inline ml-4 mt-5 mb-5 font-bold text-cyan-400'>Tech Stack : <span className=' text-xs mt-2 text-red-300 ml-1 '> React.js</span> </p>
                        <p ></p>
                        <p className='mt-2 mb-5 ml-4 flex items-start fs-2 '>Travel-list is a React.js project based upon a to-do list. Also, having features to calculate the percentage of items packed.</p>
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