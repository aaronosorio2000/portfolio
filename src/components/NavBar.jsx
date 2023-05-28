import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Portfolio",
    },
    {
      id: 3,
      link: "About",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-screen h-20 px-4 text-gray-300 bg-black fixed z-10">
      <div className="text-2xl font-tittle hover:text-teal-300 md:text-4xl">
        Aaron Osorio
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer text-2xl text-gray-300 hover:scale-110 duration-200 hover:text-teal-300"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 hover:text-teal-300 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-4xl hover:text-teal-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
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
