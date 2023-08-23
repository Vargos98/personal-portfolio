import React from 'react'
import FiestaLaBlanc from '../assets/portfolio/FiestaLaBlanc.png';
import GridNotes from '../assets/portfolio/GridNotes.png';
import MyNotes from '../assets/portfolio/MyNotes.png';
import ItunesClone from '../assets/portfolio/ItunesClone.png';
import TheChayaChitra from '../assets/portfolio/TheChayaChitra.png';
import TinderDogs from '../assets/portfolio/TinderDogs.png';

const Portfolio = () => {

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screens'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-normal w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Checkout some of my work right here</p>
                </div>



                {/* This part is the structure for the card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>


                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={FiestaLaBlanc} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://restaurant-react-app-rust.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/restaurant-react-app" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>

                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center '> React.js, HTML</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={ItunesClone} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://itunes-clone.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/Itunes-clone" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center'> HTML, CSS, JQuery</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={TheChayaChitra} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://the-chaya-chitra.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/The-Chaya-Chitra" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center'> HTML, CSS, JQuery</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={GridNotes} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://grid-notes.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/grid-notes" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center'> React.js, CSS, HTML</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={TinderDogs} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://tin-dog-phi.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/TinDog" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center '>HTML, Bootstrap</p>
                    </div>

                    <div className='shadow-md shadow-gray-600 rounded-r-lg'>
                        <img src={MyNotes} alt="" className='rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <a href="https://mynotes98.vercel.app/" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                            <a href="https://github.com/Vargos98/mynotes98" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        </div>
                        <p className='text-md bold inline ml-5 mt-5 mb-5 font-bold'>Tech Stack </p>
                        <p className='mt-5 mb-5 flex items-center justify-center'> React.js</p>
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