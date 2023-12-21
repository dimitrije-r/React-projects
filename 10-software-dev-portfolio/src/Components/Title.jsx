import React from "react";
import {AiOutlineTwitter,AiOutlineFacebook, AiOutlineGithub} from "react-icons/ai";
import TitleImg from "../assets/title-img.png";

const Title = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="title-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">N</span>ame <br />
            Frontend Developer
          </h1>
          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>
          <div className="flex py-5 ">
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white">
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>
          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">
            See Projects
          </a>
        </div>
        <div className="hero-img">
          <img src={TitleImg} alt="coding illustration" className="lgw-[80%] ml-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Title;