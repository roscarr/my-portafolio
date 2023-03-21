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
        <Project
          img="image/gallery.png"
          urlgit="https://github.com/roscarr/galleria_bebidas"
          title="Drinks Gallery"
          urlpag="https://gallery-b03e5.web.app/"
          test=" Beverage gallery showing detailed information on each beverage."
        />
        <Project
          img="image/simple task.png"
          urlgit="https://github.com/roscarr/task-porfolio"
          title="Simple task"
          urlpag="https://roscarr.github.io/task-porfolio/"
          test="Simple task that meets the basic characteristics of a CRUD. "
        />
        <Project
          img="image/gmailclone.png"
          urlgit="https://github.com/roscarr/gmail-clone"
          title="Gmail Clone"
          urlpag="https://clone-a74e4.firebaseapp.com/"
          test="Creation of a gmail clone whose function is only to save messages, the design for mobile use still needs to be improved."
        />

        <Project
          img="https://t-position.com/wp-content/uploads/2010/01/Paginas-web.jpg"
          title="future projects"
          test="Development of future projects."
        />
      </div>
    </div>
  );
}

export default Projects;
