import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 relative"
        >
          {/* 3D Ball - visible only on desktop (sm and above) */}
          <div className="absolute inset-0 hidden sm:block">
            <BallCanvas icon={technology.icon} />
          </div>

          {/* Flip card - visible only on small screens */}
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <div className="w-16 h-16 xs:w-20 xs:h-20 perspective">
              <div className="relative w-full h-full duration-500 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl flex items-center justify-center border-4 border-[#ffa500] bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 dark:from-purple-900 dark:via-indigo-900 dark:to-pink-900 shadow-[0_0_35px_10px_rgba(124,58,237,0.8)] hover:shadow-[0_0_50px_15px_rgba(124,58,237,1)] transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:-rotate-y-3 filter brightness-125 hover:brightness-150">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl flex items-center justify-center border-4 border-[#00f0ff] bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 dark:from-blue-900 dark:via-cyan-900 dark:to-teal-800 shadow-[0_0_35px_10px_rgba(0,240,255,0.8)] hover:shadow-[0_0_50px_15px_rgba(0,240,255,1)] transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:-rotate-y-3 filter brightness-100 hover:brightness-120 rotate-y-180">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
