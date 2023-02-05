import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import { FiMail } from "react-icons/fi";
function Header() {
  return (
    <header className=" flex justify-evenly sticky top-0">
      <div>
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
      </div>
      <div className=" flex justify-center items-center cursor-pointer">
        <Link to="contact">
          <FiMail className=" text-xl font-extrabold " />
        </Link>
        <p className=" pl-1">get in touch</p>
      </div>
    </header>
  );
}

export default Header;
