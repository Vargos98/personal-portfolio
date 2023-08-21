import React from 'react'
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl font-bold text-white'>I am a Frontend Developer !</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        My thirst for learning web development has
                        no bound, currently I am learning new frameworks and
                        technologies in Web Dev in-order to excel and grow.
                        My main focus is on learning and would love to work in place where learning aspects are abundant !
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex items-center cursor-pointer 
                        rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight  size={25} className='ml-1'/>
                            </span>

                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="profilepic" 
                    className='rounded-2xl mx-auto w-2/3 md:w-full'/>
                </div>
            </div>
        </div>
    )
}

export default Home