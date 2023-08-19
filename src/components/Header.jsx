import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import scroll from "../assets/scroll.gif";
const Header = () => {
  // get width  of the screen to set the number of particles
  const width = window.innerWidth;

  const particlesLoaded = (container) => {
    console.log("%cHey , don't look here 🫤", "color: red; font-size: 20px");
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
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1688716977/3D%20ICON/Nodejs_vateiw.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1688716978/3D%20ICON/react_vv0dfn.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1688716972/3D%20ICON/css3_spmjus.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1688716978/3D%20ICON/html_iudlt4.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1688716973/3D%20ICON/javascript-logo_dz88k7.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257817/3D%20ICON/mongo_ux8x7r.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257816/3D%20ICON/sass_jfccw3.png",
            width: 42,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257814/3D%20ICON/Nodejs_ymoopf.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257809/3D%20ICON/figma_hd7fdj.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257809/3D%20ICON/vite_jyfr1g.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257808/3D%20ICON/tailwind_psmt7f.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1689257808/3D%20ICON/express_b9z1rp.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1692449503/nextjs-icon-dark-background_lxlme8.png",
            width: 32,
            height: 32,
          },
          {
            src: "https://res.cloudinary.com/dfne6tl5b/image/upload/v1692449504/Typescript_logo_2020.svg_uafr9o.png",
            width: 32,
            height: 32,
          },
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

        value: width < 768 ? 140 : 80,
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
    <div className="header h500 relative flex flex-col items-center justify-center">
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
        {/* <h2 className="fontOutfit mt-1 text-lg font-semibold lg:text-2xl">
          Transforming Ideas into Web Realities
        </h2> */}
      </main>
    </div>
  );
};

export default Header;
