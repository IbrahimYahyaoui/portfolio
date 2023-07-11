import React from "react";
import SectionTitle from "./SectionTitle";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import mockup from "../assets/mockup/closetly/mc.png";
import TG from "../assets/mockup/closetly/TG.png";
import hevipi from "../assets/mockup/closetly/hevipi.png";

const Projects = ({ name }) => {
  return (
    <div className="text-white flex items-center p-4 flex-col ">
      <SectionTitle name="Projects" />
      {/* project 1 */}
      <div className="lg:w-2/3  border-4 mt-4 border-white rounded-lg group hover:scale-101 transition-transform ">
        <div className="  rounded-lg   h-90 mt-4 p-4 flex  overflow-hidden items-center lg:justify-center  flex-col-reverse lg:flex-row">
          <div className="flex  flex-col    lg:w-2/3 h-full   ">
            <p className="text-4xl fontOutfit group-hover:scale-105 transition-transform mt-4 lg:mt-0">
              Closetly
            </p>
            <p className=" pt-4 fontPoppins">
              Virtual closet application let you upload your clothes and mix
              them to make an outfits , then you can share it with your
              followers and get feedback from them.
            </p>
            <button className="w-full lg:w-52 fontPoppins justify-center h-8 flex  items-center bg-purple-800 rounded-md mt-4 ">
              Take look{" "}
              <ArrowRightIcon className="w-4 ml-2 group-hover:-rotate-45 transition-all " />
            </button>
          </div>
          {/* <div className="w-2/4  bg-white  "></div> */}
          <div className=" lg:3/4 w-3/4 flex justify-center ">
            <img
              src={mockup}
              alt="pic1"
              className=" rounded-md bg-white  lg:w-3/4  border-2 group-hover:shadow-[2px_0px_15px_1px_#ffffff] transition-shadow"
            />
          </div>
        </div>
      </div>
      {/* end project 1 */}
      {/* project 2 */}
      <div className="lg:w-2/3 my-4 border-4 border-white rounded-lg group hover:scale-101 transition-transform ">
        <div className="  rounded-lg   h-90 mt-4 p-4 flex  overflow-hidden items-center lg:justify-center  flex-col-reverse lg:flex-row">
          <div className="flex  flex-col    lg:w-2/3 h-full   ">
            <p className="text-4xl fontOutfit  group-hover:scale-105 transition-transform mt-4 lg:mt-0">
              TouaregVoyages
            </p>
            <p className=" pt-4 fontPoppins">
              website for travel agency assisting them in enhancing their online
              visibility and boosting their revenue.
            </p>
            <button className="w-full lg:w-52 fontPoppins justify-center h-8 flex  items-center bg-purple-800 rounded-md mt-4 ">
              Take look{" "}
              <ArrowRightIcon className="w-4 ml-2 group-hover:-rotate-45 transition-all " />
            </button>
          </div>
          {/* <div className="w-2/4  bg-white  "></div> */}
          <div className=" lg:3/4 w-3/4 flex justify-center ">
            <img
              src={TG}
              alt="pic2"
              className=" rounded-md bg-white lg:w-3/4  border-2 group-hover:shadow-[2px_0px_15px_1px_#ffffff] transition-shadow"
            />
          </div>
        </div>
      </div>
      {/* end project 2 */}
      {/* project 3 */}
      <div className="lg:w-2/3  border-4 border-white rounded-lg group hover:scale-101 transition-transform ">
        <div className="  rounded-lg   h-90 mt-4 p-4 flex  overflow-hidden items-center lg:justify-center  flex-col-reverse lg:flex-row">
          <div className="flex  flex-col    lg:w-2/3 h-full   ">
            <p className="text-4xl fontOutfit group-hover:scale-105 transition-transform mt-4 lg:mt-0">
              hevipi
            </p>
            <p className=" pt-4 fontPoppins">
              online store for sell clothes , linked to managing dashboard
              allowing owner to control his store without need for external
              platform.
            </p>
            <button className="w-full lg:w-52 fontPoppins justify-center h-8 flex  items-center bg-purple-800 rounded-md mt-4 ">
              Take look{" "}
              <ArrowRightIcon className="w-4 ml-2 group-hover:-rotate-45 transition-all " />
            </button>
          </div>
          {/* <div className="w-2/4  bg-white  "></div> */}
          <div className=" lg:3/4 w-3/4 flex justify-center ">
            <img
              src={hevipi}
              alt="hevipi"
              className=" rounded-md  lg:w-3/4  border-2 group-hover:shadow-[2px_0px_15px_1px_#ffffff] transition-shadow"
            />
          </div>
        </div>
      </div>
      {/* end project 3*/}
    </div>
  );
};

export default Projects;
