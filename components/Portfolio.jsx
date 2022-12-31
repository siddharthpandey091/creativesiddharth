import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { projects } from "../lib";

const Portfolio = () => {
  return (
    <div className="w-full h-auto flex flex-col relative mb-20">
      <div className="flex space-x-4 items-center">
        <p className="text-xl font-semibold">&#60;Portfolio &#47;&#62;</p>
        <div className="md:w-[60%] w-[40%] h-[1px] bg-borderColor opacity-30"></div>
      </div>

      <div className="mt-4 md:p-4 p-0 w-full flex flex-wrap lg:flex-row flex-col lg:items-start sm:justify-between justify-center items-center lg:gap-32 gap-10">
        {projects?.map((item, index) => (
          <>
            <div
              key={index}
              className={`${index % 2 != 0 ? "lg:mt-96 z-40 mt-10" : ""} ${
                index % 2 == 0 && index > 1 ? "lg:-mt-48 mt-0" : ""
              } ${
                index == projects.length - 1 ? "justify-self-start" : ""
              } p-4 sm:w-[500px] w-[300px] sm:h-[650px] h-[640px] flex flex-col space-y-10 bg-cardColor rounded-md`}
            >
              <FadeInWhenVisible>
                <div
                  className="relative sm:h-[370px] h-[300px] rounded-md"
                  style={{ backgroundImage: `url(${item.bg})` }}
                >
                  <div>
                    <img
                      src={`${item.img}`}
                      className="w-96 absolute sm:top-10 top-20 sm:left-10 left-1 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <div>
                  <h1 className="text-lg text-primary font-semibold">
                    {item.name}
                  </h1>
                  <p>{item.desc}</p>
                  <div className="flex space-x-2 mt-3">
                    {item.technologies.map((tech, index) => (
                      <p key={index} className="text-sm text-primary">
                        {tech}
                      </p>
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {item.repo ? (
                      <a href={`${item.repo}`} target="_blank" rel="noreferrer">
                        <BsGithub className="text-primary text-lg hover:text-highlight" />
                      </a>
                    ) : null}
                    {item.link ? (
                      <a
                        className="flex items-center space-x-1"
                        href={`${item.link}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <BiLinkExternal className="text-primary text-lg hover:text-highlight" />
                      </a>
                    ) : (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="flex space-x-1 items-center"
                      >
                        <BiLinkExternal className="text-primary text-lg hover:text-highlight" />{" "}
                        Not Available
                      </a>
                    )}
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </>
        ))}
      </div>

      <div className="mt-10">
        {/* <h1 className="text-lg font-bold text-primary">
          Other Web Experiments
        </h1>
        <div className="overflow-y-auto">
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
