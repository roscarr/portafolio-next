import React from "react";

import { motion } from "framer-motion";
type Props = { diretionLeft: boolean };

function Skill({ diretionLeft }: Props) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{ x: diretionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
        className=" rounded-full border border-gray-500 object-cover w-15  h-15 xl:w-20 xl:h-20  md:w-17 md:h-17
         filter
         group-hover:grayscale transition duration-300 ease-out"
      />
      <div
        className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white
        w-15 h-15 md:w-17 md:h-17 xl:w-20 xl:h-20 rounded-full z-0"
      >
        <div className=" flex items-center justify-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
