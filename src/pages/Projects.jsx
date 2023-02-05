import Project from "../components/Project";

function Projects() {
  return (
    <div
      className=" h-screen flex flex-col justify-center items-center"
      id="project"
    >
      <h3 className="  text-2xl tracking-[20px] uppercase">My Projects</h3>
      <div className=" flex gap-4 pt-[50px] pb-11">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

export default Projects;
