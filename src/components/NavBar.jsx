import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-2xl  ml-2 font">Umesh Kumar</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 transition: 0.5s ease"
          >
            <Link
              to={link}
              smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        smooth
        duration={600}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden hover:scale-110 duration-200 transition: 0.5s ease"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} className="hover:scale-105 duration-200 transition: 0.5s ease"/>}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 transition: 0.5s ease">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200 transition: 0.5s ease"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={600}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
