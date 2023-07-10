import React from "react";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div className="text-white flex items-center p-4 flex-col w-full">
      <SectionTitle name="Projects" />
      <div className="w-full ">
        <div className="border-4 rounded border-white w-full h-80 mt-4">
          Closetly
        </div>
        <div className="border-4 rounded border-white w-full h-80 mt-4">
          hevipi
        </div>
      </div>
    </div>
  );
};

export default Projects;
