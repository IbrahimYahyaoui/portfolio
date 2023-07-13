import React from "react";
import myPic from "../assets/me.jpg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className=" flex flex-col items-center  bg-white pt-5" id="About">
      <SectionTitle name="About" />
      <div className="flex flex-col items-center p-4">
        <p className=" fontPoppins mb-8 text-center lg:w-1/2">
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
