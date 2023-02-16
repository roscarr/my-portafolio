import { Link } from "react-scroll";
import "../index.css";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsClipboardData } from "react-icons/bs";

function Footer() {
  return (
    <footer className=" flex items-center justify-center bottom-8 sticky ">
      <Link
        to="home"
        className="homeButton"
        activeClass="active"
        smooth={true}
        spy={true}
      >
        <BiHomeAlt />
      </Link>

      <Link
        to="about"
        className="homeButton"
        activeClass="active"
        smooth={true}
        spy={true}
      >
        <BiUser />
      </Link>

      <Link
        to="skill"
        className="homeButton"
        activeClass="active"
        smooth={true}
        spy={true}
      >
        <BsClipboardData />
      </Link>
      <Link
        to="project"
        className="homeButton"
        activeClass="active"
        smooth={true}
        spy={true}
      >
        <BsBriefcase />
      </Link>
    </footer>
  );
}

export default Footer;
