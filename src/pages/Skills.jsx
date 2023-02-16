import Skill from "../components/Skill";

import { motion } from "framer-motion";
function Skills({}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="   flex items-center pt-[100px] flex-col space-y-10 h-screen "
      id="skill"
    >
      <h3 className=" text-3xl tracking-[20px] ">SKILLS</h3>
      <div className=" space-y-10">
        <p className=" text-center">
          HOVER OVER A SKILL FOR CURRENCY PROFICIENCY
        </p>
        <div className=" grid grid-cols-3 place-content-center gap-5 md:grid-cols-4">
          <Skill diretionLeft />
          <Skill diretionLeft={false} />
          <Skill diretionLeft />
          <Skill diretionLeft={false} />
          <Skill diretionLeft />
          <Skill diretionLeft={false} />
          <Skill diretionLeft />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
