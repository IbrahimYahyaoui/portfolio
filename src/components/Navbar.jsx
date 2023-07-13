import React, { useState, useEffect } from "react";
import {
  MoonIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion, useAnimation } from "framer-motion";
import Header from "./Header";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();
  const [isShowing, setIsShowing] = useState(false);
  const scrollToAbout = () => {
    const section = document.querySelector("#About");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToProjects = () => {
    const section = document.querySelector("#About ");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToContact = () => {
    const section = document.querySelector("#Contact");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    });
  }, [controls]);

  const containerVariants = {
    scrolled: {
      height: "5rem",
    },
    notScrolled: {
      height: "7rem",
    },
  };
  //
  useEffect(() => {
    if (isShowing) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowing]);
  return (
    <>
      <motion.div
        className="fixed z-20 flex w-full items-center border-b-2 border-white border-opacity-10 bg-myBlack pt-4 text-creamWhite lg:mt-0"
        variants={containerVariants}
        animate={isScrolled ? "scrolled" : "notScrolled"}
      >
        <motion.p
          className={`fontPacifico w-1/2 text-2xl transition-all ${
            !isScrolled ? "ml-20 " : "ml-10"
          } `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          IB
        </motion.p>
        <div
          className={`flex w-1/2 justify-end transition-all ${
            !isScrolled ? "mr-20" : "mr-10"
          } `}
        >
          <motion.div
            className="w-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            <Bars3BottomRightIcon />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="fixed right-0 z-50 flex h-screen w-full"
        initial={{ opacity: 0, x: "100%" }}
        animate={isShowing ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className=" flex w-full flex-col items-end bg-myBlack text-white">
          <p className="    m-8 " onClick={() => setIsShowing(false)}>
            <XMarkIcon className="h-8 text-white" />
          </p>
          <div
            className="mt-20 flex h-14 w-full justify-center   text-2xl "
            onClick={() => {
              setIsShowing(false);
              scrollToAbout();
            }}
          >
            <p className="w-3/4 border-b-2 text-center">About</p>
          </div>
          <div
            className="mt-10 flex h-14 w-full justify-center   text-2xl "
            onClick={() => {
              setIsShowing(false);
              scrollToProjects();
            }}
          >
            <p className="w-3/4 border-b-2 text-center">Projects</p>
          </div>
          <div
            className="mt-10 flex h-14 w-full justify-center   text-2xl "
            onClick={() => {
              setIsShowing(false);
              scrollToContact();
            }}
          >
            <p className="w-3/4 border-b-2 text-center">Contact</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
