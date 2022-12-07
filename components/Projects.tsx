import React from "react";

import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const proyects = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
     mx-auto items-center z-0"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {proyects.map((proyect, i) => (
          <div
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center 
           justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://chalkncheese.co.nz/wp-content/uploads/2022/07/mypropertyworth_web.png"
              alt=""
            />
            <div className=" space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl font-semibold text-center">
                <span className=" underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {proyects.length}
                </span>{" "}
                : Netflix Clone
              </h4>
              <p className=" text-sm text-center md:text-left">
                Netflix, Inc. es una empresa de entretenimiento y una plataforma
                de streaming estadounidense. Ubicada en Los Gatos, la compañía
                fue fundada el 29 de agosto de 1997 y un año después comenzó su
                actividad, ofreciendo un servicio de alquiler de DVD a través
                del correo postal
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[5s00px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
