import React from "react";
import myPic from "../assets/me.png";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className=" bg-white pt-5 flex  items-center flex-col">
      <SectionTitle name="About" />
      <div className="p-4 flex items-center flex-col">
        <p className=" lg:w-1/2 text-center mb-8 fontPoppins">
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
