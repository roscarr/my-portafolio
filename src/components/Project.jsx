import { BiGlobe, BiGlobeAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Project({ title, urlgit, urlpag, test, img }) {
  return (
    <div className=" bg-slate-700 p-10 max-w-xl space-y-5">
      <img src={img} alt="" className=" h-[100px] md:h-[200px]" />
      <div className=" space-y-3">
        <div className=" flex items-center justify-between md:w-[260px]">
          <h4>{title}</h4>
          <div className=" flex space-x-3 text-2xl">
            <a href={urlgit}>
              <BsGithub />
            </a>
            <a href={urlpag}>
              <BiGlobe />
            </a>
          </div>
        </div>
        <div className=" w-[200px]  md:w-[300px]">
          <p>{test}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
