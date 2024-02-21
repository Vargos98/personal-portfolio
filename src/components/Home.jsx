import React from 'react'

import HeroImage from '../assets/heroImage.png';
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";




const Home = () => {
    const links = [

        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/umesh-kumar-377775275/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/vargos98",
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={28} />
                </>
            ),
            href: "mailto:Vargos98@gmail.com",
        },

    ];
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-xl sm:text-6xl font-bold text-white '>Hi,<span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        inline-block text-transparent bg-clip-text'> there.</span> <span>👋</span></h2>
                    <p className='text-gray-400 py-4 max-w-md sm:text-sm'>
                        I'm Umesh Kumar. A passionate Front-end React Developer based in Jaipur, Rajasthan.
                    </p>
                    {/* SocialLinks */}
                    <div className='flex items-center flex-row  '>

                        <ul className='flex flex-row '>
                            {links.map(({ id, child, href, style, download }) => (
                                <li
                                    key={id}
                                    className={
                                        "hover:scale-110 duration-300  flex-row " +
                                        " " +
                                        style
                                    }
                                >
                                    <a
                                        href={href}
                                        className="flex justify-between items-center w-full text-white p-2 "
                                        download={download}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       {child}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='text-white  mt-2 mr-1'>
                        <div>
                            <form method="get" action="/UmeshKumar_Resume.pdf">
                                <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold duration-200 hover:scale-110 py-2 px-4 rounded inline-flex items-center">
                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                    <span>Download Resume</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="profilepic"
                        className='rounded-2xl mx-5 md:w-full duration-200 hover:scale-110' />
                </div>
            </div>
        </div>
    )
}

export default Home