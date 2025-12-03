import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Photo from "../assets/Photo.png";

const Hero = () => {
  return (
    <section className="relative w-full sm:h-[120vh] h-[195vh] mx-auto">
      <div className="hero-gradient absolute inset-0 pointer-events-none" />
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] sm:top-[120px]  max-w-7xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-end sm:items-start     sm:justify-between `}
      >
        {/* Left side: vertical line + dot */}
        <div className="flex  gap-4  ">
          <div className="flex flex-col justify-center items-center mt-5 flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* Middle: Text */}
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} whitespace-nowrap`}>
              Hi, I'm <span className="text-[#915eff]">Abinash</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-left max-w-3xl`}>
              I specialize in MERN Stack, <br className="sm:block hidden" />
              Laravel and Python, AI/ML <br className="sm:block hidden" />
              development, creating efficient, scalable,{" "}
              <br className="sm:block hidden" /> and dynamic web solutions.
            </p>
          </div>
        </div>

        {/* Right side: Rounded Image */}
        <div className="   mb-8 sm:mb-0 sm:justify-end ">
          <div className=" w-64 h-64 sm:w-72 sm:h-72">
            <motion.img
              src={Photo}
              alt="hero Pic"
              className="w-full h-full rounded-full object-cover border-4 border-[#915eff] shadow-2xl shadow-violet-primary/20 "
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
        </div>
      </div>

      {/* Optional canvas */}
      <span className="">
        <ComputersCanvas />
      </span>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full  flex justify-center items-center  mb-[350px] sm:mb-0">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
