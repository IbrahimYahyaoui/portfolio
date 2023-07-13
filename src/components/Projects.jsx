import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import mockup from "../assets/mockup/closetly/mc.png";
import TG from "../assets/mockup/closetly/TG.png";
import hevipi from "../assets/mockup/closetly/hevipi.png";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center p-4 pb-12 text-white">
      <SectionTitle name="Projects" />
      {/* project 1 */}
      <motion.div
        className="group mx-4 rounded-lg border-4 border-white transition-transform hover:scale-101 lg:w-2/3"
        variants={projectVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="h-90 mt-4 flex flex-col-reverse items-center overflow-hidden rounded-lg p-4 lg:flex-row lg:justify-center">
          <div className="flex h-full flex-col lg:w-2/3">
            <p className="fontOutfit mt-4 text-4xl transition-transform group-hover:scale-105 lg:mt-0">
              Closetly
            </p>
            <p className="fontPoppins pt-4">
              Virtual closet application lets you upload your clothes and mix
              them to make outfits. You can share them with your followers and
              get feedback from them.
            </p>
            <a
              href="https://closetly.vercel.app/"
              className="fontPoppins mt-8 flex h-12 w-full items-center justify-center rounded-md bg-purple-800 lg:w-52"
            >
              Take a look{" "}
              <ArrowRightIcon className="ml-2 w-4 transition-all group-hover:-rotate-45" />
            </a>
          </div>
          <div className="lg:3/4 flex w-3/4 justify-center">
            <img
              src={mockup}
              alt="pic1"
              className="rounded-md border-2 bg-white transition-shadow group-hover:rotate-1 group-hover:shadow-[2px_0px_15px_1px_#ffffff] lg:w-3/4"
            />
          </div>
        </div>
      </motion.div>
      {/* end project 1 */}
      {/* project 2 */}
      <motion.div
        className="group my-4 rounded-lg border-4 border-white transition-transform hover:scale-101 lg:w-2/3"
        variants={projectVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="h-90 mt-4 flex flex-col-reverse items-center overflow-hidden rounded-lg p-4 lg:flex-row lg:justify-center">
          <div className="flex h-full flex-col lg:w-2/3">
            <p className="fontOutfit mt-4 text-4xl transition-transform group-hover:scale-105 lg:mt-0">
              TouaregVoyages
            </p>
            <p className="fontPoppins pt-4">
              Website for travel agency assisting them in enhancing their online
              visibility and boosting their revenue.
            </p>
            <a
              href="https://touaregvoyages.netlify.com/"
              className="fontPoppins mt-8 flex h-12 w-full items-center justify-center rounded-md bg-purple-800 lg:w-52"
            >
              Take a look{" "}
              <ArrowRightIcon className="ml-2 w-4 transition-all group-hover:-rotate-45" />
            </a>
          </div>
          <div className="lg:3/4 flex w-3/4 justify-center">
            <img
              src={TG}
              alt="pic2"
              className="rounded-md border-2 bg-white transition-shadow group-hover:rotate-1 group-hover:shadow-[2px_0px_15px_1px_#ffffff] lg:w-3/4"
            />
          </div>
        </div>
      </motion.div>
      {/* end project 2 */}
      {/* project 3 */}
      <motion.div
        className="group rounded-lg border-4 border-white transition-transform hover:scale-101 lg:w-2/3"
        variants={projectVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="h-90 mt-4 flex flex-col-reverse items-center overflow-hidden rounded-lg p-4 lg:flex-row lg:justify-center">
          <div className="flex h-full flex-col lg:w-2/3">
            <p className="fontOutfit mt-4 text-4xl transition-transform group-hover:scale-105 lg:mt-0">
              hevipi
            </p>
            <p className="fontPoppins pt-4">
              Online store for selling clothes, linked to a managing dashboard
              that allows the owner to control the store without the need for an
              external platform.
            </p>
            <a
              href="https://hevipi.com/"
              className="fontPoppins mt-8 flex h-12 w-full items-center justify-center rounded-md bg-purple-800 lg:w-52"
            >
              Take a look{" "}
              <ArrowRightIcon className="ml-2 w-4 transition-all group-hover:-rotate-45" />
            </a>
          </div>
          <div className="lg:3/4 flex w-3/4 justify-center">
            <img
              src={hevipi}
              alt="hevipi"
              className="rounded-md border-2 bg-white transition-shadow group-hover:rotate-1 group-hover:shadow-[2px_0px_15px_1px_#ffffff] lg:w-3/4"
            />
          </div>
        </div>
      </motion.div>
      {/* end project 3*/}
    </div>
  );
};

export default Projects;
