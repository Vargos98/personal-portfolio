import React from 'react'
import HeroImage from '../assets/heroImage.png';
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";



const Home = () => {
    const links = [
        
        {
            id: 1,
            child: (
                <>
                 LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/umesh-kumar-377775275/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                 Github<FaGithub size={25} />
                </>
            ),
            href: "https://github.com/vargos98",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:Vargos98@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                     Resume<BsFillPersonLinesFill size={25} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-xl sm:text-6xl font-bold text-white'>Hi, there.👋 </h2>
                    <p className='text-gray-400 py-4 max-w-md sm:text-sm'>
                        I'm Umesh Kumar. A passionate Front-end React Developer based in Jaipur, Rajasthan.
                    </p>
                    {/* SocialLinks */}
                    <div className='flex items-center flex-row  {"      "}'>
                   
                    <ul className='flex flex-row'>
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
                                        className="flex justify-between items-center w-full text-white p-2"
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
                </div>
                <div>
                    <img src={HeroImage} alt="profilepic"
                        className='rounded-2xl mx-5 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home