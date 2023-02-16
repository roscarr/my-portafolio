import { motion } from "framer-motion";
function Skill({ diretionLeft }) {
  return (
    <div className=" relative flex items-center justify-center cursor-pointer">
      <motion.img
        initial={{ x: diretionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" w-[60px] h-[60px] object-cover rounded-full md:w-[80px] md:h-[80px]"
        src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
        alt=""
      />
      <div
        className=" absolute opacity-0 hover:opacity-80 hover:bg-white w-[50px] h-[50px] md:h-full
         md:w-full rounded-full transition ease-out duration-300
       flex items-center justify-center"
      >
        <div className="  ">
          <p className=" text-black hover:opacity-80 font-bold md:text-2xl text-sm">
            100%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
