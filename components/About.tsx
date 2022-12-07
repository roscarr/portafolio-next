import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 
     justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="https://ultimasnoticias.com.ve/wp-content/uploads/2022/04/gatos-1.jpg"
        initial={{ x: -200, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95
        xl:w-[500px] xl:h-[400px]"
      />
      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is{" "}
          <span className=" underline decoration-[#F7AB0A]/50">little</span>{" "}
          litle background
        </h4>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          voluptates accusantium facilis, architecto vero distinctio laborum ab,
          in veniam similique ratione obcaecati! Ipsam eos ab magnam tempora
          pariatur? Odio, et! Laborum deleniti ad esse est earum, quae unde quas
          facere in animi voluptatum illo numquam quisquam, cumque, autem
          dolores officiis eius porro quos inventore sit! Voluptatem aliquid
          delectus cumque aut!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
