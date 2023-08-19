import React from "react";
import myPic from "../assets/me.jpg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className=" flex flex-col items-center  bg-white pt-5" id="About">
      <SectionTitle name="About" />
      <div className="flex flex-col items-center p-4">
        <p className=" fontPoppins mb-8 text-center lg:w-1/2">
          I'm a web developer and computer science student who specializes build
          modern Full stack web applications. With a solid foundation in various
          programming concepts and techniques allowing me to expand my skill
          set.
        </p>
        <div className="">
          <img src={myPic} alt="me" className=" w-28" />
        </div>
      </div>
    </div>
  );
};

export default About;
