import React from "react";
import { useInView } from "react-intersection-observer";
import SocialLinkedin from "../assets/img/social/Linkedin.svg";
import SocialGithub from "../assets/img/social/Github.svg";

const Contact = () => {
  const { ref, inView } = useInView();
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold font-tittle inline border-b-4 border-gray-500">
            Contact
          </h3>
          <div>
            <p className="py-6 text-justify">
              I'm a developer on the search of opportunities to work with great
              people and big projects. If you have any question or an offer let
              me know.
            </p>
            <a
              href="https://www.linkedin.com/in/aaron-osorio-b33851159"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SocialLinkedin}
                alt="Linkedin"
                className=" inline-block my-2 mx-auto w-14 ease-in duration-300 hover:scale-110"
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
                className="inline-block my-2 mx-auto w-14 ease-in duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
        <div
          ref={ref}
          className={`flex justify-center items-center ${
            inView ? "animate-slideleft" : " invisible"
          }`}
        >
          <form
            action="https://getform.io/f/5e5cfce4-4978-46cf-adbd-0996a00324d0"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-teal-500 to-teal-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
