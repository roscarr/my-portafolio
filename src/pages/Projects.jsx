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
          img="https://scontent.fccs8-1.fna.fbcdn.net/v/t39.30808-6/335615066_120107194252110_3715403966322459674_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=gJapfBsIwvwAX9hGYHk&_nc_ht=scontent.fccs8-1.fna&oh=00_AfA9wb9KBKSlK6S8Qia8lsk-3fvpRim1GvHq2eDeVT2poA&oe=641480D3"
          urlgit="https://github.com/roscarr/galleria_bebidas"
          title="Drinks Gallery"
          urlpag="https://gallery-b03e5.web.app/"
          test=" Beverage gallery showing detailed information on each beverage."
        />
        <Project
          img="https://scontent.fccs8-1.fna.fbcdn.net/v/t39.30808-6/335466463_216265621083349_8030429796386456793_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ySFP4_flRA0AX-eBKse&_nc_oc=AQmSAY1nmoVQR3-g0weZpk9NA4hxaxeBlcyusx_dJslN3khaRzWN5g6OWg2e3cEplrc&_nc_ht=scontent.fccs8-1.fna&oh=00_AfCEzsF8j5G-wXKag43tvipwkyDwoO4m7IBDkK7vWABbhw&oe=641344B6"
          urlgit="https://github.com/roscarr/task-porfolio"
          title="Simple task"
          urlpag="https://roscarr.github.io/task-porfolio/"
          test="Simple task that meets the basic characteristics of a CRUD. "
        />
        <Project
          img="https://scontent.fccs8-1.fna.fbcdn.net/v/t39.30808-6/335068275_567350672023151_6800485602326232569_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=xPJb_CVKKRoAX_M18gk&_nc_ht=scontent.fccs8-1.fna&oh=00_AfD28oYL5hRCOqw3uRnI6StXocA9jLa6desQ_dJ_lL3wvQ&oe=64137C26"
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
