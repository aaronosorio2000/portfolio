import React from "react";
import app1 from "../assets/img/portfolio/1.png";
import app3 from "../assets/img/portfolio/3.png";
import app4 from "../assets/img/portfolio/4.png";
import app5 from "../assets/img/portfolio/5.png";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Music player",
      tech: "React/Redux/Tailwind/RapidAPI",
      src: app1,
      href: "https://ao-music-app.netlify.app/",
      code: "https://github.com/aaronosorio2000/appmusic",
    },
    {
      id: 2,
      title: "Goals app",
      tech: "React/Tailwind/Express/PostgreSQL",
      src: app3,
      href: "https://metasgym.vercel.app/list",
      code: "https://github.com/aaronosorio2000/metasgym",
    },
    {
      id: 3,
      title: "Portfolio",
      tech: "React/Tailwind",
      src: app4,
      href: "https://www.aaronosorio.com/",
      code: "https://github.com/aaronosorio2000/portfolio",
    },
    {
      id: 4,
      title: "K&V",
      tech: "WordPress/WooCommerce",
      src: app5,
      href: "https://www.kvaltamodamexicana.com/",
    },
  ];

  return (
    <div
      name="Portfolio"
      className=" bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-xl p-4 mx-auto flex flex-col justify-center">
        <div className=" py-6">
          <h3 className="text-4xl font-bold font-tittle inline border-b-4 border-gray-500">
            Portfolio
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code, title, tech }) => (
            <div key={id} className="">
              <a href={href} target="_blank" rel="noreferrer">
                <button className=" flex justify-center items-center flex-col">
                  <img
                    src={src}
                    alt="Portfolio"
                    className=" rounded-xl w-3/4 m-4 duration-300 shadow-2xl"
                  />
                  <h4 className=" font-tittle font-bold text-2xl">{title}</h4>
                  <p>{tech}</p>
                  <div className="flex justify-between py-2">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-8"
                    >
                      <FiExternalLink size={25} />
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="mx-8"
                    >
                      <BsGithub size={25} />
                    </a>
                  </div>
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
