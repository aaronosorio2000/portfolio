import React from "react";
import SocialLinkedin from "../assets/img/social/Linkedin.svg";
import SocialGithub from "../assets/img/social/Github.svg";
import Cube from "./Cube";

const About = () => {
  return (
    <div
      name="About"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex">
          <Cube />
        </div>
        <div className="flex flex-col justify-center mx-10">
          <h3 className=" text-4xl sm:text-5xl font-bold text-white font-tittle">
            I'm passionate about solving problems
          </h3>
          <p className=" text-justify text-gray-200 py-4 md:text-xl">
            Each problem presents a new opportunity to learn, grow, and refine
            ours skills.
          </p>
          <div className="">
            <a
              href="https://www.linkedin.com/in/aaron-osorio-b33851159"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SocialLinkedin}
                alt="Linkedin"
                className=" inline-block my-4 mx-auto w-20 ease-in duration-300 hover:scale-110"
              />
            </a>
            <a
              href="https://github.com/aaronosorio2000"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SocialGithub}
                alt="GitHub"
                className="inline-block my-4 mx-auto w-20 ease-in duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
