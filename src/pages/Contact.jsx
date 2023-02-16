import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import "../index.css";
function Contact() {
  return (
    <div
      className="  flex flex-col justify-evenly items-center h-screen   text-center "
      id="contact"
    >
      <h3 className=" text-2xl pt-10 uppercase tracking-[20px] md:pb-8 pb-4">
        Contact Me
      </h3>
      <div className=" md:space-y-2 pb-[100px] ">
        <h4 className=" font-bold ">i got just what you need</h4>
        <div>
          <div className=" flex  justify-center items-center space-x-5 ">
            <BiPhone className=" h-7 w-7 animate-pulse" />
            <p>4125331281</p>
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <BiEnvelope className=" h-7 w-7 animate-pulse" />
            <p>maicro894@gmail.com</p>
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <BiMap className=" h-7 w-7 animate-pulse" />
            <p>123 develope lane</p>
          </div>
        </div>
        <form className=" flex flex-col space-y-2">
          <div className=" flex flex-col md:flex-row  space-y-2 md:space-y-0  md:space-x-2">
            <input type="text" placeholder="name" className="contactInput" />
            <input type="text" placeholder="email" className="contactInput" />
          </div>
          <input type="text" placeholder="Subject" className="contactInput" />
          <textarea placeholder="Message" className="contactInput" />
          <button className=" py-5 px-10 bg-[#FAD6A5] text-[#796952]">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
