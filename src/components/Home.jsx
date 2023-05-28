import React from "react";
import HeroImage from "../assets/img/logos/imghero.png";
import { HiBriefcase } from "react-icons/hi";
import { Link } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center my-12">
          <h2 className="text-5xl font-bold text-white font-tittle md:text-7xl">
            Frontend Developer
          </h2>
          <p className="text-justify text-gray-200 py-4 text-xl md:text-3xl">
            I enjoy to bring ideas to real life through the code.
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
        <div className="flex items-center justify-center relative w-screen h-2/5 md:w-2/3 md:h-2/3">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#ADD8E6"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src={HeroImage}
            alt="Aaron 3d"
            className="animate-hero absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
