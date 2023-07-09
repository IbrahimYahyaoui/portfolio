import React, { useState, useEffect } from "react";
import { MoonIcon, Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { motion, useAnimation } from "framer-motion";
import Header from "./Header";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

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
      height: "4rem",
    },
    notScrolled: {
      height: "6rem",
    },
  };

  return (
    <>
      <motion.div
        className="flex items-center bg-myBlack
       text-creamWhite fixed w-full  lg:mt-0 border-b-2 border-white border-opacity-10 z-20"
        variants={containerVariants}
        animate={isScrolled ? "scrolled" : "notScrolled"}
      >
        <motion.p
          className={`fontPacifico   transition-all text-2xl w-1/2 ${
            !isScrolled ? "ml-20" : "ml-10"
          } `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          IB
        </motion.p>
        <div
          className={`flex justify-end    transition-all  w-1/2 ${
            !isScrolled ? "mr-20" : "mr-10"
          } `}
        >
          <motion.div
            className="w-6 mr-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <MoonIcon />
          </motion.div>
          <motion.div
            className="w-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Bars3BottomRightIcon />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
