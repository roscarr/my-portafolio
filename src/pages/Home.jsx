function Home() {
  return (
    <div
      className=" flex flex-col justify-center items-center h-screen pb-[100px]"
      id="home"
    >
      <img
        className=" rounded-full w-[200px] h-[200px] object-cover"
        src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
        alt=""
      />
      <div className=" flex flex-col justify-center items-center">
        <h2 className=" font-light text-lg">frontend developer</h2>
        <h1 className=" text-5xl md:text-6xl font-bold">my name is oscar</h1>
      </div>
    </div>
  );
}

export default Home;
