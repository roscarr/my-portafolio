import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex justify-center items-center flex-col h-screen px-10   "
      id="about"
    >
      <h1 className=" text-2xl tracking-[15px] pb-5 text-center ">ABOUT</h1>
      <div className=" flex flex-col justify-center items-center md:flex-row ">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          src="image/20230425_232916.jpg"
          alt=""
          className=" rounded-full w-[150px] h-[150px] object-cover md:rounded-md md:w-[500px] md:h-[400px]"
        />
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center items-center px-8"
        >
          <h2 className=" text-2xl pb-5 text-center">
            Here is little background
          </h2>
          <p className=" md:text-base text-xs">
            Proactive, responsible and with the ability to work in a team.
            Strong mathematical and logical reasoning skills. Great knowledge
            and experience with projects related to frontend design with the
            React framework. Willingness to learn things I don't know.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
