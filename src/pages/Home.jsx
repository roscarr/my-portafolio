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
        src="https://media.licdn.com/dms/image/D5603AQG__p7HA9Lp6A/profile-displayphoto-shrink_800_800/0/1678565432879?e=1683763200&v=beta&t=U-PmuBpM7sNyyAFr4nGVdP8ZiQFgmmTxVRpY2pCRrCc"
        alt=""
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
