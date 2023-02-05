import Skill from "../components/Skill";

function Skills({}) {
  return (
    <div
      className=" h-screen max-w-screen-lg mx-auto flex items-center pt-[100px] flex-col space-y-10 "
      id="skill"
    >
      <h3 className=" text-3xl tracking-[20px] ">SKILLS</h3>
      <div className=" space-y-10">
        <p className="">HOVER OVER A SKILL FOR CURRENCY PROFICIENCY</p>
        <div className=" grid grid-cols-3 place-content-center gap-5 md:grid-cols-4">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
}

export default Skills;
