import { BiGlobe, BiGlobeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Project() {
  return (
    <div className=" bg-slate-700 p-10 max-w-xl space-y-5">
      <img
        src="https://t-position.com/wp-content/uploads/2010/01/Paginas-web.jpg"
        alt=""
        className=" h-[200px]"
      />
      <div className=" space-y-3">
        <div className=" flex items-center justify-between w-[260px]">
          <h4>Social Media</h4>
          <div className=" flex space-x-3 text-2xl">
            <BsGithub to="https://www.linkedin.com/in/oscar-garcia-70529016a/" />
            <BiGlobe />
          </div>
        </div>
        <div className=" w-[300px]">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
            necessitatibus? Labore, voluptatum atque quos, magni eveniet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
