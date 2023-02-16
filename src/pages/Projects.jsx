import Project from "../components/Project";

function Projects() {
  return (
    <div
      className="  flex flex-col justify-center items-center h-screen"
      id="project"
    >
      <h3 className="  text-2xl tracking-[20px] uppercase text-center">
        My Projects
      </h3>
      <div className=" md:w-4/5 flex space-x-5 p-10 snap-x snap-mandatory overflow-x-scroll w-full  ">
        <Project />
        <Project />
        <Project />

        <Project />
      </div>
    </div>
  );
}

export default Projects;
