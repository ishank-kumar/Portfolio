import { motion } from "framer-motion";
import React from "react";
import "./hero.css"; // Ensure this file path is correct

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ISHANK KUMAR</motion.h2>
          <motion.h1 variants={textVariants}>
            A &nbsp; B.Tech student, An enthusiast, and a devoted web developer.
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              className="customButton"
              type="button"
              onClick={() => {
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See my latest projects
            </motion.button>
            <motion.button
              variants={textVariants}
              className="customButton"
              type="button"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        ISHANK KUMAR
      </motion.div>
      <div className="imageContainer">
        <img src="hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
