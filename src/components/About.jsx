import React from "react";
import ImgAbout from "../assets/img/logos/imgabout.png";
import SocialLinkedin from "../assets/img/social/Linkedin.svg";
import SocialGithub from "../assets/img/social/Github.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView();
  return (
    <div
      name="About"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <img
            src={ImgAbout}
            alt="Aaron 3d"
            ref={ref}
            className={`w-2/3 md:w-3/4 mx-auto ${
              inView ? " animate-slideright" : " invisible"
            }`}
          />
        </div>
        <div
          ref={ref}
          className={`flex flex-col justify-center ${
            inView ? "animate-slideright" : ""
          }`}
        >
          <h3 className=" text-4xl sm:text-5xl font-bold text-white font-tittle">
            Hey! my name is Aaron
          </h3>
          <p className=" text-justify text-gray-200 py-4">
            I'm passionate about solving problems and I've always been
            passionate about technology, when I was 13 years old I created my
            first{" "}
            <a
              href="http://cachibaches.vhideas.com/"
              target="_blank"
              rel="noreferrer"
              className="text-teal-300"
            >
              website
            </a>{" "}
            to promote the products that I sold in my school. However I didn't
            really get into it until I was studying my career in public
            accounting and finance that I realized that many of the problems I
            had could be solved by coding and save a lot of time. That's when I
            was completely hooked to the world of computers.
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
                className=" inline-block my-4 mx-auto w-20 md:w-28 ease-in duration-300 hover:scale-110"
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
                className="inline-block my-4 mx-auto w-20 md:w-28 ease-in duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
