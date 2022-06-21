import Link from "next/link";
import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import { FiCodepen } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full sm:h-[90vh] h-[100vh] flex flex-col relative">
      <div className="z-10 md:py-32 py-25">
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.6, y: -100 }}
            transition={{ delay: 0.4 }}
          >
            Hello, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.6, y: -100 }}
            transition={{ delay: 0.5 }}
            className="md:text-5xl text-3xl sm:text-4xl font-semibold"
          >
            Siddharth Pandey.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.6, y: -100 }}
            transition={{ delay: 0.6 }}
            className="md:text-5xl text-3xl sm:text-4xl font-semibold text-primary"
          >
            I design and develop web applications.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.6, y: -100 }}
            transition={{ delay: 0.7 }}
            className="w-full md:w-[60%] text-lg text-primary"
          >
            I&lsquo;m a fullstack web developer with a passion for great design and
            user experiences. Currently i&lsquo;m focused on building digital products
            at{" "}
            <a
              href="https://startuplanes.com"
              target="_blank"
rel="noreferrer" 
              className="text-highlight"
            >
              StartupLanes
            </a>
            .
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.6, y: 100 }}
          transition={{ delay: 0.7 }}
          className="mt-7"
        >
          <div className="w-full flex space-x-2 items-center">
            <p>Connect with me on :</p>
              <a
              href="https://www.linkedin.com/in/siddharthpandeydev/"
              target="_blank"
              rel="noreferrer" 
            >
              <BsLinkedin className="text-primary hover:text-highlight" />
            </a>
            <a
              href="https://www.instagram.com/creative_siddharth/?hl=en"
              target="_blank"
              rel="noreferrer" 
            >
              <BsInstagram className="text-primary hover:text-highlight" />
            </a>
            <a href="https://github.com/creativesid">
              <BsGithub className="text-primary hover:text-highlight" />
            </a>
            <a href="https://codepen.io/creativesiddharth" target="_blank" rel="noreferrer" >
              <FiCodepen className="text-primary hover:text-highlight" />
            </a>
          </div>
          <div className="border-2 border-highlight rounded-[5px] py-2 w-40 text-center cursor-pointer mt-5 hover:bg-highlight hover:text-bgColor transition-all duration-75">
            <Link href="/#portfolio">
              <a>View portfolio</a>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0.6, y: 100 }}
        transition={{ delay: 0.7 }}
        className="absolute right-0 md:top-0 sm:top-0 bottom-32"
      >
        <img src="/dark-hero.png" className="md:w-full" />
      </motion.div>
    </div>
  );
};

export default Hero;
