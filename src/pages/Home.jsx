import { useTypewriter, Cursor } from "react-simple-typewriter";
function Home() {
  const [text] = useTypewriter({
    words: ["my name is Oscar", "Frontend Developer.", "React expert."],
    loop: true,

    delaySpeed: 2000,
  });
  return (
    <div
      className=" flex flex-col  items-center  pb-[100px] h-screen justify-center"
      id="home"
    >
      <img
        className=" rounded-full w-[200px] h-[200px] object-cover"
        src="image/fotoperfi.png"
        alt="perfil"
      />
      <div className=" flex flex-col justify-center items-center">
        <h2 className=" font-light text-lg">web developer</h2>
        <h1 className=" text-5xl md:text-6xl font-bold text-center">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FAD6A5"
          />
        </h1>
      </div>
    </div>
  );
}

export default Home;
