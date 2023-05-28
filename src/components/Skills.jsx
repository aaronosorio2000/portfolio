import React from "react";
import { useInView } from "react-intersection-observer";
import css from "../assets/img/skillset/CSS.png";
import flask from "../assets/img/skillset/flask.png";
import html from "../assets/img/skillset/html.png";
import javascript from "../assets/img/skillset/javascript.png";
import python from "../assets/img/skillset/python.png";
import sql from "../assets/img/skillset/sql.png";
import react from "../assets/img/skillset/React.png";
import node from "../assets/img/skillset/Node.png";

const Skills = () => {
  const { ref, inView } = useInView();
  const skillset = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "hover:shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "hover:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "hover:shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "NodeJS",
      style: "hover:shadow-green-500",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "hover:shadow-blue-500",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "hover:shadow-blue-500",
    },
    {
      id: 7,
      src: react,
      title: "React",
      style: "hover:shadow-blue-500",
    },
    {
      id: 8,
      src: flask,
      title: "Flask",
      style: "hover:shadow-teal-500",
    },
  ];

  return (
    <div
      name="Skills"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className=" max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h3 className=" text-4xl font-bold font-tittle border-b-4 border-gray-500 p-2 inline mt-6">
            Skills
          </h3>
        </div>
        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillset.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`hover:scale-105 duration-500 py-2 rounded-lg hover:shadow-lg  ${style}`}
            >
              <img
                src={src}
                alt=""
                ref={ref}
                className={`w-20 mx-auto ${
                  inView ? "animate-slowfade" : " invisible"
                }`}
              />
              <p
                ref={ref}
                className={`mt-4" ${inView ? "animate-slowfade" : "invisible"}`}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
