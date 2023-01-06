import React from "react";
import HeroImage from "../assets/img/logos/imghero.png";
import { HiBriefcase } from "react-icons/hi";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div
          ref={ref}
          className={`flex flex-col justify-center h-full ${
            inView ? "animate-slideleft" : ""
          }`}
        >
          <h2 className="text-5xl font-bold text-white font-tittle md:text-7xl">
            I'm a Software Engineer
          </h2>
          <p className="text-justify text-gray-200 py-4 md:text-xl">
            I am constantly researching and learning and I don't think I'll ever
            stop, I like to bring ideas to real life through the code. I love to
            work on web application using technologies like React, Tailwind,
            Express, Flask, MySQL.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-teal-700 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <HiBriefcase size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Aaron 3d"
            ref={ref}
            className={`mx-auto ${inView ? "animate-slowfade" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
