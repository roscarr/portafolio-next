import React from "react";

import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className=" flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
     md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100  opacity-40 cursor-pointer
      transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" w-32 h-32 rounded-full  xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="https://thumbs.dreamstime.com/b/juego-de-freefire-logo-m%C3%B3vil-garena-free-fire-es-un-battle-royale-desarrollado-por-puntos-studio-y-publicado-para-android-e-ios-208075257.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className=" text-2xl font-light">Ceo of freefire</h4>
        <p className=" font-bold text-xl mt-1">papafap</p>
        <div className=" flex space-x-2 my-1">
          <img
            className=" h-10 w-10 rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            alt=""
          />
          <img
            className=" h-10 w-10 rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            alt=""
          />
          <img
            className=" h-10 w-10 rounded-full object-cover"
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            alt=""
          />
        </div>
        <p className=" uppercase py-2 text-gray-300 text-sm">
          started work... - End...
        </p>
        <ul className=" list-disc space-y-2 ml-5 text-sm">
          <li>Sumary point point sumary main summary</li>
          <li>Sumary point point sumary main summary</li>
          <li>Sumary point point sumary main summary</li>
          <li>Sumary point point sumary main summary</li>
          <li>Sumary point point sumary main summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
