import React from 'react'

import html from '../assets/html.png'
import CPP from '../assets/CPP.png'
import Java from '../assets/Java.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import MongoDB from '../assets/mongodb_original_logo_icon_146424.png'
// import Next from '../assets/Next.jpg'
import Vercel from '../assets/Vercel.png'




const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-700",
    },
    {
      id: 5,
      src: Java,
      title: "Java",
      style: "shadow-red-500",
    },
  
    {
      id: 6,
      src: node,
      title: "Node js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    // {
    //   id: 8,
    //   src: Next,
    //   title: "Next js",
    //   style: "shadow-yellow-400",
    // },
  
    {
      id: 9,
      src: CPP,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-700",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    
    
    {
      id: 12,
      src: Vercel,
      title: "Vercel",
      style: "shadow-white",
    },
    
   
    
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen{'       {'   '}               '}"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl bold border-b-4 border-yellow-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        inline-block text-transparent bg-clip-text">
            <strong>Tech-Stack</strong>
          </p>
          <p className="py-8">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-xl hover:scale-105 py-6 rounded-full hover:shadow-lg duration-500 ${style}`}
            >
              <img src={src} alt="" className="w-20  mx-auto hover:scale-110 duration-300 rounded-full" />
              <p className="mt-4 hover:font-bold duration-500">{title}</p>
            </div>

          ))}
          <span className='m-10'></span>
          <span></span>


        </div>

      </div>
    </div>
  )
}

export default Experience