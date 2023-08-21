import React from 'react'
import FiestaLaBlanc from '../assets/portfolio/FiestaLaBlanc.png';
import GridNotes from '../assets/portfolio/GridNotes.png';
import MyNotes from '../assets/portfolio/MyNotes.png';
import ItunesClone from '../assets/portfolio/ItunesClone.png';
import TheChayaChitra from '../assets/portfolio/TheChayaChitra.png';
import TinderDogs from '../assets/portfolio/TinderDogs.png';

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: FiestaLaBlanc
            
        },
        {
            id:2,
            src: GridNotes
        },
        {
            id:3,
            src: MyNotes
        },
        {
            id:4,
            src: ItunesClone
        },
        {
            id:5,
            src: TheChayaChitra
        },
        {
            id:6,
            src: TinderDogs
        },


    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screens'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-normal w-full h-full'>
        <div className='pb-8 '>
            <p className='font-signature text-4xl bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Checkout some of my work right here</p>
        </div>

        

        {/* This part is the structure for the card */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
        {
            portfolios.map(({id, src})=>(
                <div key={id}className='shadow-md shadow-gray-600 rounded-r-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
            ))
        }
           
        </div>
    </div>

    </div>
  )
}

export default Portfolio