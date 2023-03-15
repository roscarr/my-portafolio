import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import "../index.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const service_id = import.meta.env.VITE_YOUR_SERVICE_ID;
  const template_id = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        console.log(result.text);
        alert("mensaje enviado");
        window.location.reload(false);
      },
      (error) => {
        console.log(error.text);
        alert("error");
      }
    );
  };
  return (
    <div
      className="  flex flex-col justify-evenly items-center h-screen   text-center "
      id="contact"
    >
      <h3 className=" text-2xl pt-10 uppercase tracking-[20px] md:pb-8 pb-4">
        Contact Me
      </h3>
      <div className=" md:space-y-4 pb-[100px]  ">
        <h4 className=" font-bold pb-3  ">i got just what you need</h4>
        <div>
          {/*<div className=" flex  justify-center items-center space-x-5 ">
            <BiPhone className=" h-7 w-7 animate-pulse" />
            <p>5331281</p>
  </div>*/}
          <div className=" flex justify-center items-center space-x-5">
            <BiEnvelope className=" h-7 w-7 animate-pulse" />
            <p>maicro2907@gmail.com</p>
          </div>
          <div className=" flex justify-center items-center space-x-5 pb-4">
            <BiMap className=" h-7 w-7 animate-pulse" />
            <p>Venezuela</p>
          </div>
        </div>
        <form
          className=" flex flex-col space-y-2 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className=" flex flex-col md:flex-row  space-y-2 md:space-y-0  md:space-x-2">
            <input
              type="text"
              placeholder="name"
              className="contactInput"
              name="from_name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="contactInput"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="contactInput"
            name="subject"
            required
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            name="message"
            required
          />
          <input
            className=" py-5 px-10 bg-[#FAD6A5] text-[#796952] cursor-pointer"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
