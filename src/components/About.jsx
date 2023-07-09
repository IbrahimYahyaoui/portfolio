import React from "react";
import { MinusIcon } from "@heroicons/react/20/solid";
import myPic from "../assets/me.png";

const About = () => {
  return (
    <div className=" bg-white pt-5 flex  items-center flex-col">
      <div className="flex flex-col w-10 items-center">
        <h1 className="text-2xl text-center fontOutfit">About</h1>
        <MinusIcon className="w-4  " />
      </div>
      <div className="p-4 flex items-center flex-col">
        <p className=" lg:w-1/2 text-center mb-8">
          I'm a web developer and computer science student who specializes in
          using React to build modern and efficient web applications. With a
          solid foundation in various programming concepts and techniques, React
          has become my preferred framework. I'm continuously enhancing my
          skills in the rapidly evolving React ecosystem to stay at the
          forefront of web development.
        </p>
        <div className="">
          <img src={myPic} alt="me" className=" w-28" />
        </div>
      </div>
    </div>
  );
};

export default About;
