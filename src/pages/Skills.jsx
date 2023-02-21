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
          <Skill
            diretionLeft
            logo="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            numero={90}
          />
          <Skill
            diretionLeft={false}
            logo="https://miro.medium.com/max/1400/1*2tmzU7bve-VlTkOMWsk_Hw.jpeg"
            numero={80}
          />
          <Skill
            diretionLeft
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOPqga8gl-VNdsM9TLNmswDUw-VhHmcWuYQ&usqp=CAU"
            numero={50}
          />
          <Skill
            diretionLeft={false}
            logo="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
            numero={70}
          />
          <Skill
            diretionLeft
            logo="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
            numero={70}
          />
          <Skill
            diretionLeft={false}
            logo="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
            numero={60}
          />
          <Skill
            diretionLeft
            logo="https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png"
            numero={60}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
