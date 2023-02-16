import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
function Header() {
  return (
    <header className=" flex justify-between sticky top-4  px-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://github.com/roscarr"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/oscar-garcia-70529016a/"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className=" flex justify-center items-center cursor-pointer"
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link to="contact">
          <FiMail className=" text-xl font-extrabold " />
        </Link>
        <p className=" pl-1 hidden md:inline-flex">get in touch</p>
      </motion.div>
    </header>
  );
}

export default Header;
