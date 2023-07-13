import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import cssIcon from "../assets/css.png";
import htmlIcon from "../assets/html.png";
import jsIcon from "../assets/js.png";
import nodeIcon from "../assets/Nodejs.png";
import reactIcon from "../assets/react.png";
import express from "../assets/express.png";
import figma from "../assets/figma.png";
import mongo from "../assets/mongo.png";

import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";
import vite from "../assets/vite.png";

const Header = () => {
  const headersRef = useRef();

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particleOptions = {
    background: {
      color: "#141414",
    },
    fpsLimit: 165,
    fullScreen: false,
    particles: {
      shape: {
        type: "image",
        image: [
          { src: nodeIcon, width: 32, height: 32 },
          { src: reactIcon, width: 32, height: 32 },
          { src: cssIcon, width: 32, height: 32 },
          { src: htmlIcon, width: 32, height: 32 },
          { src: jsIcon, width: 32, height: 32 },
          { src: express, width: 32, height: 32 },
          { src: figma, width: 32, height: 32 },
          { src: mongo, width: 32, height: 32 },
          { src: sass, width: 46, height: 32 },
          { src: tailwind, width: 32, height: 32 },
          { src: vite, width: 32, height: 32 },
        ],
      },
      size: {
        random: {
          enable: true,
          minimumValue: 10,
        },
        value: 20,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 60,
      },
      opacity: {
        value: 0.8,
        random: {
          enable: true,
          minimumValue: 0.4,
        },
        animation: {
          enable: true,
          speed: 0.4,
          minimumValue: 0.4,
        },
      },
      move: {
        enable: true,
        speed: 2,
        // set max speed
        direction: "none",
        random: false,
        straight: false,

        // collisions: true,
        Attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },

        bounce: true,
        outModes: {
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
          top: "bounce",

          default: "bounce",
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: false,
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 10,
            duration: 0.3,
            opacity: 1,
          },
        },
      },
    },
  };
  return (
    <div className="header h500 relative flex items-center justify-center">
      <Particles
        id="tsparticles"
        init={loadFull}
        loaded={particlesLoaded}
        options={particleOptions}
        className=" h-full w-full "
      />

      <main className="absolute z-10 text-center text-creamWhite">
        <h3 className="fontOutfit text-xl font-semibold lg:text-2xl">
          Ibrahim Yahyaoui
        </h3>
        <h1 className="fontPaytone text-4xl lg:text-7xl">web developer</h1>
        <h2 className="fontOutfit mt-1 text-lg font-semibold lg:text-2xl">
          Transforming Ideas into Web Realities
        </h2>
      </main>
    </div>
  );
};

export default Header;
