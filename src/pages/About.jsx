import React from "react";

function About() {
  return (
    <div
      className=" flex justify-center items-center flex-col max-w-screen-lg mx-auto h-screen pb-20"
      id="about"
    >
      <h1 className=" text-2xl tracking-[15px] pb-5 text-center ">ABOUT</h1>
      <div className=" flex flex-col justify-center items-center md:flex-row ">
        <img
          src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
          alt=""
          className=" rounded-full w-[150px] h-[150px] object-cover md:rounded-md md:w-[500px] md:h-[400px]"
        />
        <div className=" flex flex-col justify-center items-center px-8">
          <h2 className=" text-2xl pb-5 text-center">
            Here is little litle background
          </h2>
          <p className=" text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            voluptates accusantium facilis, architecto vero distinctio laborum
            ab, in veniam similique ratione obcaecati! Ipsam eos ab magnam
            tempora pariatur? Odio, et! Laborum deleniti ad esse est earum, quae
            unde quas facere in animi voluptatum illo numquam quisquam, cumque,
            autem dolores officiis eius porro quos inventore sit! Voluptatem
            aliquid delectus cumque aut!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
